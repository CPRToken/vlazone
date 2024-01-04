import Checkbox from '@mui/material/Checkbox';
import Stack, { StackProps } from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterBrand: string[];
  onChangeBrand: (name: string) => void;
}

export default function FilterBrand({ options, filterBrand, onChangeBrand, ...other }: Props) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterBrand.includes(option)}
              onChange={() => onChangeBrand(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}
