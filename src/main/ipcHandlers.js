import { ipcMain } from 'electron';

ipcMain.on('foo', event => {
  Object.assign(event, { returnValue: 'bar' });
});
