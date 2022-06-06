export type Content =
  | {
      id: string;
      type: 'SINGLE';
      title: string;
      link: URL;
      iconUrl?: URL;
    }
  | {
      id: string;
      type: 'MULTI';
      title: string;
      link: URL[];
      iconUrl?: URL;
    };

export type APIContent =
  | {
      id: string;
      type: 'SINGLE';
      title: string;
      link: string;
      iconUrl?: string;
    }
  | {
      id: string;
      type: 'MULTI';
      title: string;
      link: string[];
      iconUrl?: string;
    };
