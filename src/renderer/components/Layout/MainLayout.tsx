import React, { ReactNode, useState } from 'react';
import { Box, CSSObject } from '@mui/material';
import { theme } from '@Renderer/providers/theme';
import { EXPANDED_WIDTH, Sidebar, SMALL_WIDTH } from '../Elements';

const opendMixin: CSSObject = {
  marginLeft: EXPANDED_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowY: 'hidden',
};

const closedMixin: CSSObject = {
  marginLeft: SMALL_WIDTH,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
};

export type MainLayoutProps = { children: ReactNode };
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => setOpen(!open);

  return (
    <>
      <Sidebar open={open} onToggleOpen={handleToggleOpen} />
      <Box
        sx={{
          ...(open ? opendMixin : closedMixin),
          minHeight: '100vh',
          minWidth: `calc(100vw - ${open ? EXPANDED_WIDTH : SMALL_WIDTH})`,
        }}
      >
        {children}
      </Box>
    </>
  );
};
