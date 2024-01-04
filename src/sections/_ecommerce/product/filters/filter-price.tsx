import TextField from '@mui/material/TextField';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  filterPrice: {
    start: number;
    end: number;
  };
  onChangeStartPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEndPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// ----------------------------------------------------------------------

export default function FilterPrice({
  filterPrice,
  onChangeStartPrice,
  onChangeEndPrice,
  ...other
}: Props) {
  return (
    <Stack spacing={2} direction="row" alignItems="center" divider={<div> - </div>} {...other}>
      <TextField
        size="small"
        label="$ Min"
        type="number"
        value={filterPrice.start === 0 ? '' : filterPrice.start}
        onChange={onChangeStartPrice}
      />
      <TextField
        size="small"
        label="$ Max"
        type="number"
        value={filterPrice.end === 0 ? '' : filterPrice.end}
        onChange={onChangeEndPrice}
      />
    </Stack>
  );
}
