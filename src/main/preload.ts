import { contextBridge, ipcRenderer } from 'electron';
import { Store } from './store';

contextBridge.exposeInMainWorld('myAPI', {
  getContents: async (): Promise<Store['contents']> =>
    ipcRenderer.invoke('get-contents'),
  setContents: async (
    contents: Store['contents']
  ): Promise<Store['contents']> => ipcRenderer.invoke('set-contents', contents),
  getColortheme: async (): Promise<'light' | 'dark'> =>
    ipcRenderer.invoke('get-colortheme'),
  getSettings: async (): Promise<Store['settings']> =>
    ipcRenderer.invoke('get-settings'),
  setSettings: async (
    settings: Store['settings']
  ): Promise<Store['settings']> => ipcRenderer.invoke('set-settings', settings),
});
