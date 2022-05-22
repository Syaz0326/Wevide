import React, { useRef } from 'react';
import { Button, Grid, SxProps } from '@mui/material';

export type SingleContentProps = {
  id: string;
  url: URL;
  sx?: SxProps;
};
export const SingleContent = ({ id, url, sx }: SingleContentProps) => {
  const wv = useRef<any>(null);
  const partition = `persist:${id}`;

  const handleClickBack = () => {
    wv.current.goBack();
  };
  const handleClickForward = () => {
    wv.current.goForward();
  };

  return (
    <Grid container sx={{ height: '100vh', width: '100%', ...sx }}>
      <Button onClick={handleClickBack}>戻る</Button>
      <Button onClick={handleClickForward}>進む</Button>
      <webview
        ref={wv}
        src={url.href}
        style={{ height: '100vh', width: '100%' }}
        allowpopups
        webpreferences="nativeWindowOpen=yes,nodeIntegration=no,spellcheck-yes,contextIsolation=no,any=no,webSecurity=no"
        partition={partition}
      />
    </Grid>
  );
};
