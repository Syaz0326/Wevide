import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { Theme, CSSObject } from '@mui/material/styles';
import { EXPAND_WIDTH, MINI_WIDTH, Sidebar } from './Sidebar';
import { theme } from '@/provider/Theme';

const openedMixin = (theme: Theme): CSSObject => ({
  ml: EXPAND_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  ml: MINI_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar open={open} onToggleOpen={handleToggleOpen} />
      <Box
        component="main"
        sx={{
          ...(open ? openedMixin(theme) : closedMixin(theme)),
        }}
      >
        {children}
      </Box>
    </>
  );
};
