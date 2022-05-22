import React, { useRef } from 'react';
import { Grid, SxProps } from '@mui/material';
import { NavigationBar } from '../Elements';

export type SingleContentProps = {
  id: string;
  url: URL;
  sx?: SxProps;
};
export const SingleContent = ({ id, url, sx }: SingleContentProps) => {
  const wv = useRef<any>(null);
  const partition = `persist:${id}`;

  return (
    <Grid container sx={{ height: '100vh', width: '100%', ...sx }}>
      <NavigationBar wv={wv} sx={{ height: '36px' }} />
      <webview
        ref={wv}
        src={url.href}
        style={{ height: 'calc(100vh - 36px)', width: '100%' }}
        allowpopups
        webpreferences="nativeWindowOpen=yes,nodeIntegration=no,spellcheck-yes,contextIsolation=no,any=no,webSecurity=no"
        partition={partition}
      />
    </Grid>
  );
};
