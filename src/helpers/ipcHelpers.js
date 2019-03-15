import { ipcMain, ipcRenderer } from 'electron';
import createDebug from 'debug';

const debug = createDebug(__filename);

const API_REQUEST_PREFIX = 'api-request';
const API_RESPONSE_PREFIX = 'api-response';

let requestId = 0;

export function createAPIEndpoint(api, callback) {
  debug('Create API Endpoint: %s', api);

  ipcMain.on(`${API_REQUEST_PREFIX}:${api}`, async (event, { params, respondTo }) => {
    debug('Received API request with respondTo: %s', respondTo);

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
    const respondTo = `${API_RESPONSE_PREFIX}:${requestId}`;
    debug('Calling API with respondTo: %s', respondTo);
    requestId += 1;
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
