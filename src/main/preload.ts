import { Content } from '@Common/types';
import { contextBridge, ipcRenderer } from 'electron';
import { Store } from './store';

contextBridge.exposeInMainWorld('myAPI', {
  getContents: async (): Promise<Content[]> => {
    const result = await ipcRenderer.invoke('get-contents');

    return result;
  },
  getColortheme: async (): Promise<Store['settings']['mode']> => {
    const result = await ipcRenderer.invoke('get-colortheme');

    return result;
  },
});
