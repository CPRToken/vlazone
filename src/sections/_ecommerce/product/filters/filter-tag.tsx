import Chip from '@mui/material/Chip';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterTag: string[];
  onChangeTag: (name: string) => void;
}

export default function FilterTag({ options, filterTag, onChangeTag, ...other }: Props) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={1} {...other}>
      {options.map((option) => {
        const selected = filterTag.includes(option);

        return (
          <Chip
            key={option}
            size="small"
            label={option}
            variant="outlined"
            onClick={() => onChangeTag(option)}
            sx={{
              ...(selected && {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }),
            }}
          />
        );
      })}
    </Stack>
  );
}
