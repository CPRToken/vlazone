import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  testimonial: ITestimonialProps;
}

export default function TestimonialItem({ testimonial, sx, ...other }: Props) {
  return (
    <Stack
      alignItems="center"
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Rating value={testimonial.ratingNumber} readOnly />

      <Typography
        sx={{
          my: 3,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {testimonial.review}
      </Typography>

      <Typography variant="h6">{testimonial.name}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.role}
      </Typography>
    </Stack>
  );
}
