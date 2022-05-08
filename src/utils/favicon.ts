const FAVICON_API = 'https://www.google.com/s2/favicons';

export const getFaviconUrl = (domain: string, size: number = 32) => new URL(`${FAVICON_API}?domain=${domain}&sz=${size}`);
