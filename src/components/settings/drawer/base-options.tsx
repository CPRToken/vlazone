import Typography from '@mui/material/Typography';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';

import Iconify from '../../iconify';

// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  title: string;
  icons: string[];
  selected: boolean;
};

export default function BaseOptions({ title, icons, selected, ...other }: Props) {
  return (
    <ListItemButton
      sx={{
        p: 3,
        justifyContent: 'space-between',
        ...(selected && {
          color: 'primary.main',
        }),
      }}
      {...other}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Iconify width={28} icon={selected ? icons[1] : icons[0]} />
    </ListItemButton>
  );
}
