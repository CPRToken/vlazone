import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function JohnSmith() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        py: { xs: 8, md: 15 },
      }}
    >


      <Grid
        container
        spacing={3}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="about"
              src="/assets/images/course/course_6.jpg"
              ratio="4/6"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
          John Smith
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Educación: Facultad de Derecho, Pontificia Universidad Católica de Chile (Licenciado en Derecho, 1992).

            Admitido a práctica: 1993.

            Premios y Reconocimientos: Premio Docente Destacado, Facultad de Derecho, Pontificia Universidad Católica de Chile (2011).

            Actividad Académica: Profesor de Derecho Civil, Facultad de Derecho, Pontificia Universidad Católica de Chile (1999 en adelante). Profesor de Legislación en Construcción, Facultad de Ingeniería Civil, Pontificia Universidad Católica de Chile (2015-2016).

            Idiomas: Español e inglés.Education: Pontificia Universidad Católica de Chile School of Law (Bachelor of Laws, 1992).

            Admitted to Practice: 1992.

            Awards and Recognitions:  Oustanding Professor Award (2011), Pontificia Universidad Católica de Chile School of Law.

            Academic Activity: Professor of Civil Law, School of Law, Pontificia Universidad Católica de Chile (1999-). Professor of Construction Law, School of Civil Engineering, Pontificia Universidad Católica de Chile (2015-2016).

          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 5, md: 10 }}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
