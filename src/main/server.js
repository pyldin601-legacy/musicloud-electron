import { ipcMain } from 'electron';
import { createApplication } from './app';
import { GET_WEB_PORT } from '../events';

export function createWebServer() {
  const app = createApplication();
  const listener = app.listen(0, () => {
    console.log(`Streaming server is listening on port ${listener.address().port}`);
  });

  ipcMain.on(GET_WEB_PORT, event => {
    event.returnValue = listener.address().port;
  });

  return listener;
}
