import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { Content } from '@Common/types';

const currentContent = atom<Content>({
  key: 'currentContent',
  default: {
    id: '1',
    type: 'SINGLE',
    title: '',
    link: new URL('https://www.google.com'),
  },
});

export const useCurrentContent = () => {
  const state = useRecoilState(currentContent);

  return state;
};

export const useGetCurrentContent = () => {
  const state = useRecoilValue(currentContent);

  return state;
};

export const useSetCurrentContent = () => {
  const setState = useSetRecoilState(currentContent);

  return setState;
};
