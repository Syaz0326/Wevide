import React from 'react';
import {
  Drawer,
  List,
  ListItem as ListItemOriginal,
  ListItemButton as ListItemButtonOriginal,
  ListItemIcon as ListItemIconOriginal,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const SMALL_WIDTH = '64px';
export const EXPANDED_WIDTH = '240px';

const ListItem = styled(ListItemOriginal)`
  padding: 8px 0;
`;

const ListItemButton = styled(ListItemButtonOriginal)`
  padding: 0;
  margin: 0;
`;
const ListItemIcon = styled(ListItemIconOriginal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${SMALL_WIDTH};
  max-width: ${SMALL_WIDTH};
`;

const getIconURL = (domain: string, sz: number = 32) => {
  const IconAPI = new URL('https://www.google.com/s2/favicons');
  return `${IconAPI.href}?domain=${domain}&sz=${sz}`;
};

const Items: {
  title: string;
  link: URL;
  iconUrl?: string;
}[] = [
  {
    title: 'Google',
    link: new URL('https://www.google.com'),
  },
  {
    title: 'Yahoo',
    link: new URL('https://www.yahoo.co.jp'),
  },
];

export type SidebarProps = {
  open: boolean;
  onToggleOpen: () => void;
};
export const Sidebar = ({ open, onToggleOpen }: SidebarProps) => (
  <Drawer
    variant="persistent"
    open
    sx={{
      '& .MuiDrawer-paper': {
        width: open ? EXPANDED_WIDTH : SMALL_WIDTH,
      },
    }}
  >
    <List
      sx={{
        p: 0,
      }}
    >
      <ListItem
        disablePadding
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: open ? 'flex-end' : 'inherit',
        }}
      >
        <ListItemButton
          onClick={onToggleOpen}
          sx={{
            maxWidth: SMALL_WIDTH,
          }}
        >
          <ListItemIcon>
            {open ? (
              <ChevronLeftIcon
                sx={{
                  fontSize: '32px',
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  fontSize: '32px',
                }}
              />
            )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      {Items.map((item) => (
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img
                src={item.iconUrl ?? getIconURL(item.link.hostname)}
                alt={item.title}
                width={32}
                height={32}
              />
            </ListItemIcon>
            {open && <ListItemText primary={item.title} />}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
