import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { ITestimonialProps } from 'src/types/testimonial';

import TestimonialItem from './career-testimonial-item';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function CareerTestimonial({ testimonials }: Props) {
  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
  });

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={9}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
              FIRMA
            </Typography>

            <Typography variant="h6" sx={{ mb: 5, textAlign: 'center' }}>
              Villarroel, Lecaros y Aste es una firma de gran trayectoria. Fue fundada en 1968 y desde entonces se ha caracterizado por construir relaciones de confianza y de larga data con sus clientes, basada en la excelencia y gran experiencia de sus profesionales, proporcionando una atención personalizada y un apoyo legal ágil y oportuno.
              Nuestro estudio cuenta con doctores en derecho, profesores universitarios, ex abogados integrantes de la Corte Suprema y, en general, profesionales de gran prestigio. Nuestra firma promueve y fomenta la participación en el mundo académico y la capacitación permanente de sus abogados, con el fin de mantener un alto estándar de calidad profesional.
              Los abogados de Villarroel, Lecaros y Aste se enorgullecen de ser profesionales accesibles, estudiosos, actualizados, con visión creativa y comprometidos con sus clientes.


            </Typography>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
}
