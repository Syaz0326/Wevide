import React, { ReactNode } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  SxProps,
} from '@mui/material';

type Item = {
  label: ReactNode;
  value: string;
};

export type SelectInputProps = {
  label: string;
  items: Item[];
  value: string;
  onChange?: SelectProps['onChange'];
  sx?: SxProps;
};
export const SelectInput = ({
  label,
  items,
  value,
  onChange,
  sx,
}: SelectInputProps) => (
  <FormControl sx={sx}>
    <InputLabel>{label}</InputLabel>
    <Select label={label} value={value} onChange={onChange}>
      {items.map((item) => (
        <MenuItem value={item.value}>{item.label}</MenuItem>
      ))}
    </Select>
  </FormControl>
);
