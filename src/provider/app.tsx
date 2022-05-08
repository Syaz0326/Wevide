import React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from './Theme';

export type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
