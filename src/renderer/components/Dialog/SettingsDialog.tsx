import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  SelectProps,
} from '@mui/material';
import { useSettings } from '@Renderer/recoil/settings';
import { Store } from '@Main/store';
import { SelectInput } from '../Elements';

type ColorThemesListItem = {
  label: string;
  value: Store['settings']['mode'];
};

export type SettingsDialogProps = {
  open: boolean;
  onClose: () => void;
};
export const SettingsDialog = ({ open, onClose }: SettingsDialogProps) => {
  const [settings, setSettings] = useSettings();
  const handleChangeColorTheme: SelectProps['onChange'] = (e) => {
    setSettings({
      ...settings,
      mode: e.target.value as Store['settings']['mode'],
    });
  };

  const colorThemes: ColorThemesListItem[] = [
    { label: 'システム', value: 'system' },
    { label: 'ライト', value: 'light' },
    { label: 'ダーク', value: 'dark' },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>設定</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SelectInput
          label="カラーテーマ"
          items={colorThemes}
          value={settings.mode}
          onChange={handleChangeColorTheme}
          sx={{ my: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};
