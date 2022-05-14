const path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, './src-electron/main.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/main'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, './src-electron'),
    },
  },
  module: {
    rules: [
      {
        test: /src-electron\/\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      },
    ],
  },
};
