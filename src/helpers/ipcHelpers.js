import { ipcMain, ipcRenderer } from 'electron';
import createDebug from 'debug';
import { PassThrough } from 'stream';
import { getNextRequestId } from './requestId';

const debug = createDebug(__filename);

const API_REQUEST_PREFIX = 'api-request';
const API_RESPONSE_PREFIX = 'api-response';
const STREAM_REQUEST_PREFIX = 'stream-request';
const STREAM_RESPONSE_PREFIX = 'stream-response';

export function createAPIEndpoint(api, callback) {
  debug('Create API Endpoint: %s', api);

  ipcMain.on(`${API_REQUEST_PREFIX}:${api}`, async (event, { params, respondTo }) => {
    debug('Received API request: %s with respondTo: %s', api, respondTo);

    try {
      const response = await callback(params);
      event.sender.send(respondTo, [null, response]);
    } catch (e) {
      event.sender.send(respondTo, [e.message, null]);
    }
  });
}

export function createAPICall(api) {
  debug('Create API Call: %s', api);

  return params => {
    const respondTo = `${API_RESPONSE_PREFIX}:${getNextRequestId()}`;
    debug('Calling API with respondTo: %s', respondTo);
    return new Promise((resolve, reject) => {
      ipcRenderer.once(respondTo, (event, [err, resp]) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
      ipcRenderer.send(`${API_REQUEST_PREFIX}:${api}`, { params, respondTo });
    });
  };
}

export function createStreamEndpoint(api, callback) {
  debug('Create Stream Endpoint: %s', api);

  ipcMain.on(`${STREAM_REQUEST_PREFIX}:${api}`, async (event, { params, respondTo }) => {
    debug('Received Stream request: %s with respondTo: %s', api, respondTo);

    try {
      const stream = callback(params);

      stream.on('data', data => {
        event.sender.send(respondTo, { type: 'data', data });
      });

      stream.on('end', () => {
        event.sender.send(respondTo, { type: 'end' });
      });

      stream.on('error', ({ message }) => {
        event.sender.send(respondTo, { type: 'error', error: message });
      });
    } catch ({ message }) {
      event.sender.send(respondTo, { type: 'error', error: message });
    }
  });
}

export function createStreamCall(api) {
  debug('Create Stream Call: %s', api);

  return params => {
    const respondTo = `${STREAM_RESPONSE_PREFIX}:${getNextRequestId()}`;
    debug('Calling Stream: %s with respondTo: %s', api, respondTo);

    const passThrough = new PassThrough();
    const handleEvent = (event, ev) => {
      switch (ev.type) {
        case 'data': {
          passThrough.push(ev.data);
          break;
        }

        case 'error': {
          ipcRenderer.removeListener(respondTo, handleEvent);
          passThrough.destroy(new Error(ev.error));
          break;
        }

        case 'end': {
          ipcRenderer.removeListener(respondTo, handleEvent);
          passThrough.push(null);
          break;
        }

        default: {
          ipcRenderer.removeListener(respondTo, handleEvent);
          passThrough.destroy(new Error(`Unknown event type - ${ev.type}`));
        }
      }
    };

    ipcRenderer.on(respondTo, handleEvent);
    ipcRenderer.send(`${STREAM_REQUEST_PREFIX}:${api}`, { params, respondTo });

    return passThrough;
  };
}
