import * as handleOpenAudioFiles from './handleOpenAudioFiles';

export default function registerIpcHandlers(ipcMain) {
  handleOpenAudioFiles.register(ipcMain);
}
