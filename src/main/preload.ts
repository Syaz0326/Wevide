import { Content } from '@Common/types';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('myAPI', {
  getContents: async (): Promise<Content[]> => {
    const result = await ipcRenderer.invoke('get-contents');

    return result;
  },
});
