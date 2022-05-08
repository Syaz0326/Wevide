import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Theme, CSSObject } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import { getFaviconUrl } from '@/utils';
import { Site } from '@/types';
import { SiteButton } from '../Elements';
import { theme } from '@/provider/Theme';

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

const openedMixin = (theme: Theme): CSSObject => ({
  width: EXPAND_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: MINI_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

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
        ...(open ? openedMixin(theme) : closedMixin(theme)),
        '& .MuiDrawer-paper': {
          ...(open ? openedMixin(theme) : closedMixin(theme)),
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
};
