import * as path from 'path';
import { app, BrowserWindow } from 'electron';

const isDelelopment = `${process.env.NODE_ENV}`.trim() === 'development';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (isDelelopment) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.join(path.join(__dirname, '../renderer/index.html')));
  }
};

app.whenReady().then(() => {
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
