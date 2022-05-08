import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { getFaviconUrl } from '@/utils';
import { Site } from '@/types';
import { MINI_WIDTH } from '@/components/Layout/Sidebar';

export type SiteButtonProps = Site & {
  expand: boolean;
};

export function SiteButton({ title, src, iconSrc, expand }: SiteButtonProps) {
  return (
    <Tooltip title={title} placement="right">
      <ListItem disableGutters disablePadding>
        <ListItemButton
          disableGutters
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: MINI_WIDTH,
            }}
          >
            <img
              src={iconSrc ?? getFaviconUrl(src.hostname).href}
              alt={title}
              width={32}
              height={32}
            />
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={{
              whiteSpace: 'nowrap',
              visibility: expand ? 'inherit' : 'hidden',
            }}
          />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}
