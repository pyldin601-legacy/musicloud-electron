import { dialog } from 'electron';

export function register(ipcMain) {
  ipcMain.on('open-audio-files:request', event => {
    const files = dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory', 'multiSelections'],
    });
    event.sender.send('open-audio-files:reply', files);
  });
}
