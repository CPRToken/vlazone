import Stack from '@mui/material/Stack';

import NavList from './nav-list';
import { NavProps } from '../types';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }: NavProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
    </Stack>
  );
}
