import React, { useState, } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {primaryFont, secondaryFont, tertiaryFont, quaternaryFont} from "../../theme/typography";
import Container from '@mui/material/Container';

import Grid from '@mui/material/Unstable_Grid2'; // or '@mui/material/Grid' based on your MUI version
import Typography from '@mui/material/Typography';
import { useResponsive } from 'src/hooks/use-responsive';
import Image from 'src/components/image';


const tabs = [
  { label: 'Educación:', value: 'Educación' },
  { label: 'Actividad Profesional:', value: 'Actividad Profesionals' },

  { label: 'Publicaciones:', value: 'Publicaciones' },
];




  // Render children directly, since they are JSX elements



export default function ChristianAste() {
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
            <Image alt="about" src="/assets/team/aste.jpg" sx={{ borderRadius: 2, width: '420px', height: '500px' }} />
          </Grid>
        )}
        <Grid xs={12} md={6} lg={8} sx={{ pl: { lg: 11 } }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Christian Aste M.</Typography>
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

              Facultad de Derecho, Universidad Central (Licenciado en Derecho, 1991). Diplomado en Derecho
              Bancario, Universidad Central (1991), <br/><br/>
              Postgrado en Gerencia Pública, Instituto de Estudios Fiscales de España (1994), Postgrado en Gestión Tributaria,
              Universidad Tecnológica Metropolitana (1995), Diplomado en Tributación de la Empresa, Universidad Adolfo Ibañez (1998), Postgrado en Derecho Tributario, Universidad
              Salamanca (1999), Magíster en Derecho Económico, Universidad de Chile (1999), Diplomado en Derecho
              Procesal Penal, Universidad de Chile (2001). Contador (ECAS). Professional Certificate in Corporate
              Finance. Columbia UnibversIty.
              <br/><br/>
              Cursos: American Contract Law I- II en Yale Law; Financial Markets en Yale University; Rethinking
              International Tax Law en Universiteit Leiden; Successful Negotiation: Essential Strategies and Skills en
              University of Michigan; Litigación Derecho Constitutional Universidad de Chile.
              Admitido a práctica: 1993.
            </Typography>
          )}






          {currentTab === 'Actividad Profesionals' && (
            <>
              <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
                Servicio de Impuestos Internos, Dirección Nacional (1990-1999). Socio a cargo de la división litigios y
                controversias de Deloitte (1999-2005). Miembro del Consejo Editorial del Manual de Consultas Tributarias
                de la AFIICH (2006-2007).
                <br/><br/> Director 15ª edición del Código Tributario, Thomson Reuters (2015 – ). Presidente del Comité
                Tributario de la Cámara Nacional de Comercio (2013-2015) – (2018 – ).
              </Typography>

              <br/><br/>
              <Typography variant="h5">Actividad Académica</Typography>



              <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
                Profesor en cursos de pre grado en Universidad de Santiago (1992-1994), Escuela de Contadores Auditores
                (1997-1999), Universidad Central (1996-2009) y Universidad Nacional Andrés Bello (1999-2000) y cursos de
                Post Grado (Universidad Católica de Valparaíso, Universidad Católica del Norte, Universidad Arturo Prat,
                Universidad del Desarrollo, Universidad Adolfo Ibañez, Pontificia Universidad Católica de Chile)
              </Typography>
            </>

          )}

          {currentTab === 'Publicaciones' && (
            <>

              <Typography variant="body1" sx={{color: 'text.primary', fontFamily: primaryFont, pt: 2}}>
                «Curso de Código y Derecho Tributario», «Curso de Impuesto a la Renta (I y II)» «Reforma Tributaria
                Comentada» (LegalPublishing). Curso de Código y Derecho Tributario (8ª Edición – Thomson Reuters).
                .Nuevo Régimen de Tributación para las Empresas y sus dueños – Thomson Reuters).Education: Faculty of
                Law, Central University (Law Degree, 1991).
                <br/><br/>
                Diploma in Banking Law, Central University (1991), Postgraduate in Public Management, Institute of
                Fiscal Studies of Spain (1994), Postgraduate in Tax Management, Metropolitan Technological University
                (1995), Diploma in Business Taxation, Adolfo Ibañez University (1998 ), Postgraduate in Tax Law,
                Universidad Salamanca (1999), Master in Economic Law, Universidad de Chile (1999), Diploma in Criminal
                Procedural Law, Universidad de Chile (2001). Accountant (ECAS). Professional Certificate in Corporate
                Finance. Columbia University.
              </Typography>
            </>
          )}






        </Grid>
      </Grid>
    </Container>
  );
}
