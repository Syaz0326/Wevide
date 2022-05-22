import React, { useEffect, useState } from 'react';
import { Box, IconButton, SxProps } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';

export type NavigationBarProps = {
  wv: any;
  sx?: SxProps;
};
export const NavigationBar = ({ wv, sx }: NavigationBarProps) => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    if (wv.current.addEventListener === undefined) return () => {};
    const checkCanGoBack = () => setCanGoBack(wv.current.canGoBack());
    wv.current.addEventListener('did-navigate', checkCanGoBack);
    wv.current.addEventListener('did-navigate-in-page', checkCanGoBack);
    const checkCanGoForward = () => setCanGoForward(wv.current.canGoForward());
    wv.current.addEventListener('did-navigate', checkCanGoForward);
    wv.current.addEventListener('did-navigate-in-page', checkCanGoForward);
    const cleanup = () => {
      wv.current.removeEventListener('did-navigate', checkCanGoBack);
      wv.current.removeEventListener('did-navigate-in-page', checkCanGoBack);
      wv.current.removeEventListener('did-navigate', checkCanGoForward);
      wv.current.removeEventListener('did-navigate-in-page', checkCanGoForward);
    };
    return cleanup;
  }, [wv]);

  const handleClickBack = () => {
    wv.current.goBack();
  };
  const handleClickForward = () => {
    wv.current.goForward();
  };
  const handleClickReload = () => {
    wv.current.reloadIgnoringCache();
  };

  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <IconButton onClick={handleClickBack} disabled={!canGoBack}>
        <ArrowBackIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleClickForward} disabled={!canGoForward}>
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleClickReload}>
        <RefreshIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
