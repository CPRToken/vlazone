import { Theme, SxProps } from '@mui/material/styles';

import { countries } from 'src/assets/data';

import CountrySelect from 'src/components/country-select';

// ----------------------------------------------------------------------

type Props = {
  filterLocation: string | null;
  onChangeLocation: (newValue: string | null) => void;
  sx?: SxProps<Theme>;
};

export default function FilterLocation({ filterLocation, onChangeLocation, sx }: Props) {
  return (
    <CountrySelect
      fullWidth
      hiddenLabel
      placeholder="Locations"
      value={filterLocation}
      onChange={(event, newValue) => onChangeLocation(newValue as string)}
      options={countries.map((option) => option.label)}
      getOptionLabel={(option) => option}
      sx={sx}
    />
  );
}
