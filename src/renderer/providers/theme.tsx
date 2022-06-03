import React, { ReactNode, useEffect, useState } from 'react';
import {
  createTheme,
  ThemeProvider as ThemeProviderOriginal,
} from '@mui/material';
import grey from '@mui/material/colors/grey';
import { Store } from '@Main/store';

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      hover: string;
    };
  }

  interface ThemeOptions {
    color?: {
      hover?: string;
    };
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  color: {
    hover: grey[300],
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  color: {
    hover: grey[900],
  },
});

export type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<Store['settings']['mode']>();

  useEffect(() => {
    const f = async () => {
      const m = await window.myAPI.getColortheme();
      setMode(m);
    };
    f();
  });

  return (
    <ThemeProviderOriginal theme={mode === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProviderOriginal>
  );
};
