import * as path from 'path';
import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';
import { Store, init, readStore, writeStore } from '@Main/store';

const isDelelopment = `${process.env.NODE_ENV}`.trim() === 'development';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDelelopment) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
};

app.whenReady().then(() => {
  init();

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('get-contents', () => {
  const store = readStore();
  return store.contents;
});

ipcMain.handle('get-colortheme', () => {
  const { settings } = readStore();

  if (settings.mode === 'system') {
    return nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
  }
  return settings.mode;
});

ipcMain.handle('get-settings', () => {
  const { settings } = readStore();

  return settings;
});

ipcMain.handle('set-settings', (_, settings: Store['settings']) => {
  const store = readStore();
  writeStore({
    contents: store.contents,
    settings,
  });

  return settings;
});
