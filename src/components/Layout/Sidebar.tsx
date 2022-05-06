import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export type SidebarProps = {
  open: boolean;
  onToggleOpen: () => void;
};
export const Sidebar = ({ open, onToggleOpen }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: open ? '256px' : '64px',
        },
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: open ? 'flex-start' : 'center',
          }}
        >
          <ListItemButton
            onClick={onToggleOpen}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              px: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
