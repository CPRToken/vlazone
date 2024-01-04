import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

type TestimonialItemContentProps = {
  testimonial: ITestimonialProps;
};

export function TestimonialItemContent({ testimonial }: TestimonialItemContentProps) {
  const { review } = testimonial;

  return (
    <Stack alignItems="center">
      <Iconify
        icon="carbon:quotes"
        sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
      />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: (theme) => theme.typography.h1.fontFamily,
        }}
      >
        {review}
      </Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemThumbnailProps = {
  testimonial: ITestimonialProps;
  selected: boolean;
};

export function TestimonialItemThumbnail({ testimonial, selected }: TestimonialItemThumbnailProps) {
  return (
    <Stack
      sx={{
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={testimonial.avatarUrl}
        sx={{
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: (theme) => theme.transitions.create('all'),
          ...(selected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
}
