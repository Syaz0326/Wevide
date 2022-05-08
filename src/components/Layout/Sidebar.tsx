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
import AddIcon from '@mui/icons-material/Add';
import { Site } from '@/types';
import { theme } from '@/provider/Theme';
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

const openedMixin = {
  width: EXPAND_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
};

const closedMixin = {
  width: MINI_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
};

export type SidebarProps = {
  open: boolean;
  onToggleOpen: () => void;
};
export function Sidebar({ open, onToggleOpen }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        ...(open ? openedMixin : closedMixin),
        '& .MuiDrawer-paper': {
          ...(open ? openedMixin : closedMixin),
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
        <ListItem
          disablePadding
          sx={{
            display: 'flex',
          }}
        >
          <ListItemButton
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: MINI_WIDTH,
              }}
            >
              <AddIcon />
            </ListItemIcon>
            <ListItemText
              primary="Add"
              sx={{
                whiteSpace: 'nowrap',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
