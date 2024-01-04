import Checkbox from '@mui/material/Checkbox';
import Stack, { StackProps } from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterShipping: string[];
  onChangeShipping: (name: string) => void;
}

export default function FilterShipping({
  options,
  filterShipping,
  onChangeShipping,
  ...other
}: Props) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterShipping.includes(option)}
              onChange={() => onChangeShipping(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}
