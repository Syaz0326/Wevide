const path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, './src/main/main.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/main'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@Main': path.resolve(__dirname, './src/main'),
      '@Renderer': path.resolve(__dirname, './src/renderer'),
      '@Common': path.resolve(__dirname, './src/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src', 'main'),
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.main.json',
          },
        },
      },
    ],
  },
};
