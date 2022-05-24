/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src/renderer',
  base: './',
  publicDir: './dist/renderer/assets',
  build: {
    outDir: path.join(__dirname, 'dist/renderer'),
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/renderer'),
      '@Common': path.join(__dirname, 'src/common'),
    },
  },
  plugins: [react()],
});
