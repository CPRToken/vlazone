import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------
export default function CareerLandingStep() {

// Hard-coded list items for each group
  const STEPS = [
    [
      { title: 'CORPORATIVO' },
      { title: 'FUSIONES Y ADQUISICIONES' },
      { title: 'TRIBUTARIA' },
      { title: 'LABORAL' },
      { title: 'CONTRATACIÓN NACIONAL E INTERNACIONAL' },
      { title: 'INMOBILIARIA, INGENIERÍA Y CONSTRUCCIÓN' },
      { title: 'FINANCIAMIENTO DE PROYECTOS' },
      { title: 'MERCADOS REGULADOS' },
      { title: 'INMIGRACIÓN' },
      { title: 'INVERSIÓN EXTRANJERA' },
      { title: 'ENERGÍA Y RECURSOS NATURALES' },
      { title: 'AGUAS' }
    ],
    [
      { title: 'LITIGIOS' },
      { title: 'SOLUCIÓN DE CONFLICTOS Y ARBITRAJE' },
      { title: 'LIBRE COMPETENCIA' },
      { title: 'CONSTITUCIONAL Y ADMINISTRATIVO' },
      { title: 'INFORMES ESPECIALIZADOS EN DERECHO' },
      { title: 'CONFLICTOS DE LEYES Y JURISDICCIÓN' },
      { title: 'PROTECCIÓN DEL CONSUMIDOR' },
      { title: 'INSOLVENCIA Y REORGANIZACIÓN EMPRESARIAL' },
      { title: 'MEDIO AMBIENTE' },
      { title: 'AGROINDUSTRIA' },
      { title: 'EDUCACIÓN' },
      { title: 'PRÁCTICA GENERAL' }
    ]
  ];

// ... rest of your component ...



  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        backgroundColor: 'white', // Set background color to white
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ textAlign: 'center', pb: 9, color: '#343434' }}>
          ÁREAS DE PRÁCTICA
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
          }}
        >
          {STEPS.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((item, itemIndex) => (
                <Typography key={itemIndex} variant="h6" sx={{ mt: 2, mb: 1, fontWeight: '600', color: '#343434' }}>
                  {item.title}
                </Typography>
              ))}
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
