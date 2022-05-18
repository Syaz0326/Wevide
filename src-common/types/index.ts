export type Content =
  | {
      id: string;
      type: 'SINGLE';
      title: string;
      link: URL;
      iconUrl?: string | URL;
    }
  | {
      id: string;
      type: 'MULTI';
      title: string;
      link: URL[];
      iconUrl?: string | URL;
    };
