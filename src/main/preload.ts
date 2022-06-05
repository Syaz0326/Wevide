import { contextBridge, ipcRenderer } from 'electron';
import { Store } from './store';

contextBridge.exposeInMainWorld('myAPI', {
  getContents: async (): Promise<Store['contents']> =>
    ipcRenderer.invoke('get-contents'),
  getColortheme: async (): Promise<Store['settings']['mode']> => {
    const result: Store['settings'] = await ipcRenderer.invoke('get-settings');

    return result.mode;
  },
  getSettings: async (): Promise<Store['settings']> =>
    ipcRenderer.invoke('get-settings'),
});
