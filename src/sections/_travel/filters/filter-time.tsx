import { Theme, SxProps } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  departureDay: Date | null;
  onChangeDepartureDay: (newValue: Date | null) => void;
  sx?: SxProps<Theme>;
};

export default function FilterTime({ departureDay, onChangeDepartureDay, sx }: Props) {
  return (
    <MobileDatePicker
      value={departureDay}
      onChange={onChangeDepartureDay}
      slotProps={{
        textField: {
          fullWidth: true,
          variant: 'standard',
          InputProps: {
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
          },
          sx: {
            [`& .${inputBaseClasses.input}`]: {
              py: 0,
              height: 52,
              typography: 'subtitle1',
            },
            ...sx,
          },
        },
      }}
    />
  );
}
