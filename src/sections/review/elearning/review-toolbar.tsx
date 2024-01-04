import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export default function ReviewToolbar({ sort, onChangeSort }: Props) {
  return (
    <Stack spacing={5} alignItems="center" direction="row" sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ width: 1 }}>
        Reviews
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" flexShrink={0}>
        <FormControl hiddenLabel size="small">
          <Select value={sort} onChange={onChangeSort}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
