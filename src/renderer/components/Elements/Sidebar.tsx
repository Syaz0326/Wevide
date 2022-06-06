import React from 'react';
import {
  Drawer,
  List,
  ListItem as ListItemOriginal,
  ListItemButton as ListItemButtonOriginal,
  ListItemIcon as ListItemIconOriginal,
  ListItemText,
  createTheme,
  useTheme,
} from '@mui/material';
import { styled, CSSObject } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getIconUrl } from '@Common/utils/icon';
import { useCurrentContent } from '@Renderer/recoil/currentContent';
import { Content } from '@Common/types';
import { useContents } from '@Renderer/recoil/contents';

export const SMALL_WIDTH = '64px';
export const EXPANDED_WIDTH = '240px';

const { transitions } = createTheme();

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

const opendMixin: CSSObject = {
  width: EXPANDED_WIDTH,
  transition: transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.enteringScreen,
  }),
  overflowY: 'hidden',
};

const closedMixin: CSSObject = {
  width: SMALL_WIDTH,
  transition: transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.leavingScreen,
  }),
};

export type SidebarProps = {
  open: boolean;
  onToggleOpen: () => void;
};
export const Sidebar = ({ open, onToggleOpen }: SidebarProps) => {
  const [currentContent, setCurrentContent] = useCurrentContent();
  const handleClick = (content: Content) => () => setCurrentContent(content);

  const theme = useTheme();

  const [items, setItems] = useContents();

  return (
    <Drawer
      variant="persistent"
      open
      sx={{
        ...(open ? opendMixin : closedMixin),
        '& .MuiDrawer-paper': {
          ...(open ? opendMixin : closedMixin),
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
        {items.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              backgroundColor:
                item.id === currentContent.id ? theme.color.hover : 'inherit',
            }}
          >
            <ListItemButton onClick={handleClick(item)}>
              <ListItemIcon>
                <img
                  src={
                    typeof item.iconUrl === 'string'
                      ? item.iconUrl
                      : item.iconUrl?.href ??
                        (item.type === 'SINGLE'
                          ? getIconUrl(item.link.hostname)
                          : getIconUrl(item.link[0].hostname))
                  }
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </ListItemIcon>
              {open && <ListItemText primary={item.title} />}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton
            onClick={() => {
              setItems([
                ...items,
                {
                  id: '3',
                  type: 'SINGLE',
                  title: 'Twitter',
                  link: new URL('https://twitter.com'),
                },
              ]);
            }}
          >
            <ListItemText primary="追加" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
