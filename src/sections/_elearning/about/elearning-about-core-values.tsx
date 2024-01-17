import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Corporativo',

    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Fusiones y Adquisiciones',

    icon: 'carbon:chat-bot',
  },
  {
    title: 'Tributaria',

    icon: 'carbon:airport-location',
  },
  {
    title: 'Laboral',

    icon: 'carbon:event',
  },
  {
    title: 'Contratación Nacional e Internacional',

    icon: 'carbon:event',
  },
  {
    title: 'Inmobiliaria, Ingeniería y Construcción',

    icon: 'carbon:event',
  },
  {
    title: 'Financiamiento de Proyectos',

    icon: 'carbon:event',
  },
  {
    title: 'Mercados Regulados',

    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container sx={{ py: { xs: 8, md: 15 }, maxWidth: '1800px' }}>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}


        >

          <Typography variant="h2">Áreas de Práctica</Typography>

        </Stack>

        <Grid container spacing={8}>

          {CORE_VALUES.map((value) => (


            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
