import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

const LEVELS = ['Beginner', 'Intermediate', 'Expert'];

// ----------------------------------------------------------------------

type Props = {
  filterLevel: string[];
  onChangeLevel: (event: SelectChangeEvent<string[]>) => void;
};

export default function FilterLevel({ filterLevel, onChangeLevel }: Props) {
  return (
    <FormControl fullWidth hiddenLabel>
      <Select
        multiple
        displayEmpty
        value={filterLevel}
        onChange={onChangeLevel}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All levels
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
        {LEVELS.map((level) => (
          <MenuItem key={level} value={level}>
            <Checkbox
              size="small"
              checked={filterLevel.includes(level)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
