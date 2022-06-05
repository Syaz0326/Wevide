import { Store } from '@Main/store';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const initSettings = window.myAPI.getSettings();

const settingsState = atom<Store['settings']>({
  key: 'settings',
  default: initSettings,
});

export const useSettings = () => useRecoilState(settingsState);

export const useGetSettings = () => useRecoilValue(settingsState);

export const useSetSettings = () => useSetRecoilState(settingsState);
