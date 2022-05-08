const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] },
    ],
    'react-prop-types': 'off',
    'react-require-default-props': 'off',
    'react-jsx-props-=no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: [path.join(__dirname, './tsconfig.json')],
      },
    },
  },
};
