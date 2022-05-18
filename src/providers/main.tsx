import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from './theme';

export type MainProviderProps = {
  children: ReactNode;
};
export const MainProvider = ({ children }: MainProviderProps) => (
  <RecoilRoot>
    <ThemeProvider>{children}</ThemeProvider>
  </RecoilRoot>
);
