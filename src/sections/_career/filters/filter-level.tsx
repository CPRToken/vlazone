import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const JOB_LEVELS = [
  'Manager',
  'Intern/Student',
  'No experience',
  'Senior',
  'Supervisor',
  'Director',
];

// ----------------------------------------------------------------------

type Props = {
  filterLevel: string[];
  onChangeJobType: (event: SelectChangeEvent<string[]>) => void;
};

export default function FilterLevel({ filterLevel, onChangeJobType }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <FormControl
      fullWidth
      hiddenLabel
      size={mdUp ? 'small' : 'medium'}
      sx={{ maxWidth: { md: 180 } }}
    >
      <Select
        multiple
        displayEmpty
        value={filterLevel}
        onChange={onChangeJobType}
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
        {JOB_LEVELS.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox
              size="small"
              checked={filterLevel.includes(type)}
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
