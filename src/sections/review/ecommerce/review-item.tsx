import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';

import { IReviewItemProp } from 'src/types/review';

// ----------------------------------------------------------------------

type Props = Partial<IReviewItemProp>;

export default function ReviewItem({ name, rating, message, createdAt, avatarUrl }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        py: 4,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mr: 2.5 }} />

      <Stack spacing={1}>
        <Rating
          size="small"
          value={rating}
          precision={0.5}
          readOnly
          sx={{
            '& svg': {
              color: 'text.primary',
            },
          }}
        />

        <Typography variant="subtitle1">{name}</Typography>

        {createdAt && (
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {fDate(createdAt)}
          </Typography>
        )}

        <Typography variant="body2">{message}</Typography>

        <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }}>
          <Typography variant="subtitle2">Was this review helpful?</Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Button size="small" color="inherit" startIcon={<Iconify icon="carbon:thumbs-up" />}>
              Yes
            </Button>

            <Button
              size="small"
              color="inherit"
              startIcon={
                <Iconify
                  icon="carbon:thumbs-up"
                  sx={{
                    transform: 'scale(-1, -1)',
                  }}
                />
              }
            >
              No
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
