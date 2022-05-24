import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import { Box, IconButton, SxProps, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import { theme } from '@Renderer/providers/theme';

export type NavigationBarProps = {
  wv: any;
  homeUrl: URL;
  sx?: SxProps;
};
export const NavigationBar = ({ wv, homeUrl, sx }: NavigationBarProps) => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (wv.current.addEventListener === undefined) return () => {};
    const handleDidNavigate = () => {
      setCanGoBack(wv.current.canGoBack());
      setCanGoForward(wv.current.canGoForward());
      setCurrentUrl(wv.current.getURL());
    };
    wv.current.addEventListener('did-navigate', handleDidNavigate);
    wv.current.addEventListener('did-navigate-in-page', handleDidNavigate);
    const cleanup = () => {
      wv.current.removeEventListener('did-navigate', handleDidNavigate);
      wv.current.removeEventListener('did-navigate-in-page', handleDidNavigate);
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
  const handleClickHome = () => {
    wv.current.loadURL(homeUrl.href);
  };

  const handleChangeUrlField = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentUrl(e.target.value);
  };
  const handleKeyDownUrlField = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      wv.current.loadURL(currentUrl);
    }
  };
  const handleFocusUrlField = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        px: 1,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <IconButton onClick={handleClickBack} disabled={!canGoBack}>
        <ArrowBackIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleClickForward} disabled={!canGoForward}>
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleClickHome}>
        <HomeIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleClickReload}>
        <RefreshIcon fontSize="small" />
      </IconButton>
      <TextField
        sx={{ flexGrow: 1, height: '80%' }}
        InputProps={{ sx: { height: '100%' } }}
        value={currentUrl}
        onChange={handleChangeUrlField}
        onKeyDown={handleKeyDownUrlField}
        onFocus={handleFocusUrlField}
      />
    </Box>
  );
};
