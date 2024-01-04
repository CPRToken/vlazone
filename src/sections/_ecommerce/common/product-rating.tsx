import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import Rating, { ratingClasses } from '@mui/material/Rating';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  ratingNumber: number;
  label: string;
}

export default function ProductRating({ ratingNumber, label, ...other }: Props) {
  return (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      <Rating
        size="small"
        value={ratingNumber}
        readOnly
        precision={0.5}
        sx={{
          [`&.${ratingClasses.root}`]: {
            '& svg': {
              height: 12,
              width: 12,
            },
          },
        }}
      />

      {label && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}
