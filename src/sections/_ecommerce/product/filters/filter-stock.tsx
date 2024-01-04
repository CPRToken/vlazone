import Switch from '@mui/material/Switch';
import { StackProps } from '@mui/material/Stack';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  filterStock: boolean;
  onChangeStock: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterStock({ filterStock, onChangeStock }: Props) {
  return (
    <FormControlLabel
      control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
      labelPlacement="start"
      label="Only in Stock"
      sx={{
        m: 0,
        [`& .${formControlLabelClasses.label}`]: {
          typography: 'h6',
        },
      }}
    />
  );
}
