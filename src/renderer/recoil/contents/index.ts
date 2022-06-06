import { Content } from '@Common/types';
import { atom, useRecoilState } from 'recoil';

const initContents = window.myAPI.getContents();

const contentsState = atom<Content[]>({
  key: 'contents',
  default: (async () => {
    const init = await initContents;
    return init.map((c) => {
      if (c.type === 'SINGLE') {
        return {
          ...c,
          link: new URL(c.link),
          iconUrl: c.iconUrl === undefined ? undefined : new URL(c.iconUrl),
        };
      }
      return {
        ...c,
        link: c.link.map((l) => new URL(l)),
        iconUrl: c.iconUrl === undefined ? undefined : new URL(c.iconUrl),
      };
    });
  })(),
});

export const useContents = (): [Content[], (contents: Content[]) => void] => {
  const [contents, setContents] = useRecoilState(contentsState);

  return [
    contents,
    (newContents: Content[]) => {
      setContents(newContents);
      window.myAPI.setContents(
        newContents.map((c) => {
          if (c.type === 'SINGLE') {
            return {
              ...c,
              link: c.link.href,
              iconUrl: c.iconUrl?.href,
            };
          }
          return {
            ...c,
            link: c.link.map((l) => l.href),
            iconUrl: c.iconUrl?.href,
          };
        })
      );
    },
  ];
};
