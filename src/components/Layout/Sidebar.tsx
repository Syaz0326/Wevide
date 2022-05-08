import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getFaviconUrl } from '@/utils';
import { Site } from '@/types';
import { SiteButton } from '../Elements';

export const MINI_WIDTH = '64px';
export const EXPAND_WIDTH = '256px';

const list: Site[] = [
  {
    title: 'Google',
    src: new URL('https://www.google.com/'),
  },
  {
    title: 'Yahoo Japan',
    src: new URL('https://www.yahoo.co.jp/'),
  },
  {
    title: 'Qiita',
    src: new URL('https://www.qiita.com/'),
  },
];

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
          width: open ? EXPAND_WIDTH : MINI_WIDTH,
        },
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: open ? 'flex-end' : 'center',
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
        {list.map((item) => (
          <SiteButton {...item} expand={open} />
        ))}
      </List>
    </Drawer>
  );
};
