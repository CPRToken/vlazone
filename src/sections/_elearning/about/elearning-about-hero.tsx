import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningAboutHero() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 20 },
        overflow: 'hidden',
        bgcolor: '#3d3d3d',
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'grey.800',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1">Firma</Typography>

            <Typography sx={{ mt: 3, mb: 6 }}>
              Villarroel, Lecaros y Aste es una firma de gran trayectoria. Fue fundada en 1968 y desde entonces se ha caracterizado por construir relaciones de confianza y de larga data con sus clientes, basada en la excelencia y gran experiencia de sus profesionales, proporcionando una atención personalizada y un apoyo legal ágil y oportuno.


            </Typography>

            <Button variant="contained" size="large" color="primary">
              Browse Courses
            </Button>
          </Grid>

          <Grid xs={12} md={6} lg={6}>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
