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

export const useSettings = () => {
  const [settings, setSettings] = useRecoilState(settingsState);

  return [
    settings,
    (settingsProps: Store['settings']) => {
      const newSettings = window.myAPI.setSettings(settingsProps);
      newSettings.then((s) => setSettings(s));
    },
  ] as const;
};

export const useGetSettings = () => useRecoilValue(settingsState);

export const useSetSettings = () => {
  const setSettings = useSetRecoilState(settingsState);

  return (settings: Store['settings']) => {
    const newSettings = window.myAPI.setSettings(settings);
    newSettings.then((s) => setSettings(s));
  };
};
