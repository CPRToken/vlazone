import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

import { ITourProps } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelOrderCompletedInfo({ tour }: Props) {
  const { slug, ratingNumber, totalReviews, tourGuide } = tour;

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
    >
      <Stack spacing={2}>
        <Typography variant="h5">{slug}</Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>

          {totalReviews && (
            <Link variant="body2" sx={{ color: 'text.secondary' }}>
              ({fShortenNumber(totalReviews)} reviews)
            </Link>
          )}
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Avatar src={tourGuide?.avatarUrl} />
        <div>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Tour guide by
          </Typography>
          <Typography variant="subtitle2">{tourGuide?.name}</Typography>
        </div>
      </Stack>
    </Stack>
  );
}
