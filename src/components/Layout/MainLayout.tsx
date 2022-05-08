import { Box } from '@mui/material';
import React from 'react';
import { ReactNode, useState } from 'react';
import { EXPAND_WIDTH, MINI_WIDTH, Sidebar } from './Sidebar';

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
      <Box sx={{ ml: open ? EXPAND_WIDTH : MINI_WIDTH }}>{children}</Box>
    </>
  );
};
