import React from 'react';
import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';

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
      {children}
    </>
  );
};
