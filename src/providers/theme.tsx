import React, { ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider as ThemeProviderOriginal,
} from '@mui/material';

export const theme = createTheme();

export type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProviderOriginal theme={theme}>{children}</ThemeProviderOriginal>
);
