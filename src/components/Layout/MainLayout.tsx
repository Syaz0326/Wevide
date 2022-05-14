import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { Sidebar, SMALL_WIDTH } from '../Elements';

export type MainLayoutProps = { children: ReactNode };
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => setOpen(!open);

  return (
    <>
      <Sidebar open={open} onToggleOpen={handleToggleOpen} />
      <Box
        sx={{
          ml: SMALL_WIDTH,
        }}
      >
        {children}
      </Box>
    </>
  );
};
