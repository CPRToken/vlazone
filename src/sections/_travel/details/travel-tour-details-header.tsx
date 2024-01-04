import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';

import { ITourProps } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelTourDetailsHeader({ tour }: Props) {
  const { slug, ratingNumber, totalReviews, location, favorited, tourGuide } = tour;

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: 3,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {slug}
        </Typography>

        <Stack direction="row" alignItems="center" flexShrink={0}>
          <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
            <Iconify icon="carbon:share" />
          </IconButton>

          <Checkbox
            color="error"
            checked={favorite}
            onChange={handleChangeFavorite}
            icon={<Iconify icon="carbon:favorite" />}
            checkedIcon={<Iconify icon="carbon:favorite-filled" />}
          />
        </Stack>
      </Stack>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>

          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Iconify icon="carbon:location" sx={{ mr: 0.5 }} /> {location}
        </Stack>

        <Stack direction="row" alignItems="center">
          <Avatar src={tourGuide?.avatarUrl} sx={{ width: 24, height: 24 }} />

          <Typography variant="body2" sx={{ color: 'text.secondary', mx: 0.5 }}>
            Tour guide by
          </Typography>

          <Link variant="subtitle2" color="inherit">
            {tourGuide?.name}
          </Link>
        </Stack>
      </Stack>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
