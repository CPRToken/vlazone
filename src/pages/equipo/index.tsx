import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import any other Material-UI components you need

const EquipoPage = () => {
  return (
    <Container>
      <Box my={4}> {/* Adds margin to the top and bottom */}
        <Typography variant="h4" component="h1" gutterBottom>
          Equipo
        </Typography>
        {/* Additional content for your Equipo page */}
      </Box>
    </Container>
  );
};

export default EquipoPage;
