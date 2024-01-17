import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { primaryFont, secondaryFont, tertiaryFont, quaternaryFont } from "../../theme/typography";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useResponsive } from 'src/hooks/use-responsive';
import Image from 'src/components/image';

const tabs = [
  { label: 'Educación', value: 'Educación' },
  { label: 'Actividad Académica', value: 'Actividad Académica' },
  { label: 'Publicaciones', value: 'Publicaciones' },
];



export default function GabrielVillarroel() {
  const mdUp = useResponsive('up', 'md');

  // Long text structured with JSX
  const [currentTab, setCurrentTab] = useState<string>('Educación');


  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentTab(newValue);
  };



  return (
    <Container sx={{ py: { xs: 8, md: 17 }, maxWidth: '1200px' }}>

  <Grid container spacing={3} alignItems={{  md: 'space-between' }} sx={{ minHeight: '500px' }}>
  {mdUp && (
    <Grid xs={12} md={6} lg={4}>
  <Image alt="about" src="/assets/team/villaroel_g.jpg" sx={{ borderRadius: 2, width: '420px', height: '500px' }} />
  </Grid>
  )}
  <Grid xs={12} md={6} lg={8} sx={{ pl: { lg: 11 } }}>
  <Typography variant="h3" sx={{ mb: 3 }}>
  Carlos Villarroel B.</Typography>
  <Tabs
  indicatorColor="primary"
  onChange={handleTabChange}
  scrollButtons="auto"
  sx={{ mt: 5 }}
  textColor="primary"
  value={currentTab}
  variant="scrollable"
    >
    {tabs.map((tab) => (
        <Tab
          key={tab.value}
      label={<Typography variant="subtitle1" sx={{ margin: '0 16px' }}>{tab.label}</Typography>}
  value={tab.value}
  />
))}
  </Tabs>



  {currentTab === 'Educación' && (
    <Typography variant="body1" sx={{color: 'text.primary', fontFamily: quaternaryFont, pt: 2}}>

      Educación: Facultad de Derecho, Pontificia Universidad Católica de Chile (Licenciado en Derecho, 1981).

      Admitido a práctica: 1982.

      Premios y reconocimientos: Premio Tocornal y Premio Montenegro al alumno más sobresaliente de su generación (1980).
  </Typography>
  )}






  {currentTab === 'Actividad Académica' && (
    <>
      <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
        Actividad Académica: Profesor de Derecho Internacional Privado, Facultad de Derecho, Pontificia Universidad Católica de Chile (1984 a la fecha). Ex miembro del Consejo de la Facultad de Derecho de la Pontificia Universidad Católica de Chile.
  <br/><br/>
        Otras actividades: Árbitro del Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago. Socio fundador de la Asociación Chilena de Derecho Internacional Privado.
  </Typography>

  <br/><br/>





  </>

  )}

  {currentTab === 'Publicaciones' && (
    <>

      <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
        Publicaciones: Autor de varias publicaciones, entre ellas los siguientes libros: “La obligación natural como elemento moralizador de la relación jurídica en el Código Civil Chileno” (1982), obra que la Facultad de Derecho de la Pontifica Universidad Católica de Chile distinguió con el Premio Pedro Lira Urquieta; “Curso de Derecho Internacional Privado. Parte General” (2004); “Derecho Internacional Privado” (2016).

        Idiomas: Español e inglésEducation: School of Law, Pontificia Universidad Católica de Chile (Bachelor of Laws, 1981).


    </Typography>
    </>
  )}






  </Grid>
  </Grid>
  </Container>
);
}
