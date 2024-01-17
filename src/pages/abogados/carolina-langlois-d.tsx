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
  { label: 'Reconocimientos', value: 'Reconocimientos' },

];



export default function CarolinaLanglois() {
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
            <Image alt="about" src="/assets/team/langlois.jpg" sx={{ borderRadius: 2, width: '420px', height: '500px' }} />
          </Grid>
        )}
        <Grid xs={12} md={6} lg={8} sx={{ pl: { lg: 11 } }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Carolina Langlois D.</Typography>
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
            <Typography variant="body1" sx={{color: 'text.primary', pt: 2}}>

              Educación: Facultad de Derecho, Pontificia Universidad Católica de Chile (Licenciada en Derecho, 1985).
              Magíster en Derecho de la Empresa, Pontificia Universidad Católica de Chile 1998 (Tesis: legislación
              sector forestal); Post título en Planificación Tributaria, Universidad del Desarrollo, 2010.(tesis:
              aspecto tributario del sector forestal).
              <br/><br/>
              Admitida a práctica: 1986
              <br/><br/>
              Otras actividades: Comité RRHH Sofofa; Abogado Jefe y Gerente de Recursos Humanos Grupo CCF (1998-2008).


            </Typography>
          )}


          {currentTab === 'Reconocimientos' && (

              <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
                Mejor Gerente de RRHH del Sector Vitivinícola y del sector Forestal, reconocimiento otorgado por pares y revista Capital 2007.
                <br/><br/>
                Idiomas: Español e inglésEducation: School of Law, Pontificia Universidad Católica de Chile (Bachelor of Laws, 1985).
                Master’s Degree in Corporate Law, Pontificia Universidad Católica de Chile, 1998 (Thesis: Forestry Sector Legislation); postgraduate studies in Tax Planning, Universidad del Desarrollo, 2010.(Thesis: Tributary Aspects of the Forestry Sector).
              </Typography>




          )}




        </Grid>
      </Grid>
    </Container>
  );
}
