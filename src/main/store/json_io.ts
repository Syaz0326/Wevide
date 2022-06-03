import * as path from 'path';
import * as fs from 'fs';
import { Content } from '@Common/types';

const STORE_PATH = path.join(__dirname, '../store.json');

export type Store = {
  contents: Content[];
  settings: {
    mode: 'dark' | 'light' | 'system';
  };
};

const initStore: Store = {
  contents: [
    {
      id: '1',
      type: 'SINGLE',
      title: 'Google',
      link: new URL('https://www.google.com'),
    },
    {
      id: '2',
      type: 'SINGLE',
      title: 'Yahoo',
      link: new URL('https://www.yahoo.co.jp'),
    },
  ],
  settings: {
    mode: 'system',
  },
};

export const readStore = (): Store => {
  const store = fs.readFileSync(STORE_PATH, 'utf-8');

  return JSON.parse(store);
};

export const writeStore = (store: Store): Store => {
  const storeJson = JSON.stringify(store);

  fs.writeFileSync(STORE_PATH, storeJson);

  return store;
};

export const init = (): Store => {
  const exists = fs.existsSync(STORE_PATH);
  if (exists) return readStore();
  writeStore(initStore);
  return initStore;
};
