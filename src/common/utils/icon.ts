const IconAPI = new URL('https://www.google.com/s2/favicons');

export const getIconUrl = (domain: string, size: number = 32): string =>
  `${IconAPI.href}?domain=${domain}&sz=${size}`;
