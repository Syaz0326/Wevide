import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { theme } from '@/provider/Theme';
import { EXPAND_WIDTH, MINI_WIDTH, Sidebar } from './Sidebar';

const openedMixin = {
  ml: EXPAND_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
};

const closedMixin = {
  ml: MINI_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
};

export type MainLayoutProps = {
  children: ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
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
          ...(open ? openedMixin : closedMixin),
        }}
      >
        {children}
      </Box>
    </>
  );
}
