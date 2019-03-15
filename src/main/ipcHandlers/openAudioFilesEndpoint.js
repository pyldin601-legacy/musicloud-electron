import { dialog } from 'electron';
import { createAPIEndpoint } from '../../helpers/ipcHelpers';

export function createOpenAudioFilesEndpoint() {
  createAPIEndpoint('open-audio-files', () => {
    return dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory', 'multiSelections'],
    });
  });
}
