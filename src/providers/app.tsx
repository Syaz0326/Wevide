import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme';

export type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeProvider>{children}</ThemeProvider>
);
