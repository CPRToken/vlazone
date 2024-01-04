import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

const FEES = ['Free', 'Paid'];

// ----------------------------------------------------------------------

type Props = {
  filterFee: string[];
  onChangeFee: (event: SelectChangeEvent<string[]>) => void;
};

export default function FilterFee({ filterFee, onChangeFee }: Props) {
  return (
    <FormControl fullWidth hiddenLabel>
      <Select
        multiple
        displayEmpty
        value={filterFee}
        onChange={onChangeFee}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All Fee
              </Typography>
            );
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {FEES.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox
              size="small"
              checked={filterFee.includes(type)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
