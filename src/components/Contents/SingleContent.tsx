import React from 'react';
import { Grid } from '@mui/material';
import { useGetCurrentContent } from '@/recoil/currentContent';

export const SingleContent = () => {
  const currentContent = useGetCurrentContent();

  if (currentContent.type === 'MULTI') {
    return <h1>MultiContents</h1>;
  }

  return (
    <Grid container sx={{ height: '100vh', width: '100%' }}>
      <webview
        src={currentContent.link.href}
        style={{ height: '100vh', width: '100%' }}
        allowpopups
        webpreferences="nativeWindowOpen=yes,nodeIntegration=no,spellcheck-yes,contextIsolation=no,any=no"
      />
    </Grid>
  );
};
