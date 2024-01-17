import   { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputClasses } from '@mui/material/Input';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _brands } from 'src/_mock';


import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import { IJobFiltersProps } from 'src/types/job';
import { ICountriesProps } from 'src/types/contact';

import FilterKeyword from '../filters/filter-keyword';
import FilterLocation from '../filters/filter-location';

// ----------------------------------------------------------------------

type FiltersProps = Pick<IJobFiltersProps, 'filterKeyword' | 'filterLocation'>;

export default function CareerLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState<FiltersProps>({
    filterKeyword: null,
    filterLocation: null,
  });

  const darkModeBgImage = '/assets/images/career/lawfirm.png';
  const lightModeBgImage = '/assets/office/tradicion333.jpg';


  const isDarkMode = theme.palette.mode === 'dark';


  const handleChangeKeyword = useCallback(
    (newValue: string | null) => {
      setFilters({
        ...filters,
        filterKeyword: newValue,
      });
    },
    [filters]
  );

  const handleChangeLocation = useCallback(
    (newValue: ICountriesProps | null) => {
      setFilters({
        ...filters,

      });
    },
    [filters]
  );

  const renderFilters = (
    <Stack
      spacing={{ xs: 1, md: 0 }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        p: 1,
        borderRadius: 1,
        bgcolor: 'common.white',
        alignItems: { md: 'center' },
        justifyContent: { md: 'center' },
      }}
    >
      <FilterKeyword
        filterKeyword={filters.filterKeyword}
        onChangeKeyword={handleChangeKeyword}
        sx={{
          bgcolor: 'transparent',
          [`&:hover, &.${inputClasses.focused}`]: {
            bgcolor: 'transparent',
          },
        }}
      />

      {mdUp && <Divider orientation="vertical" sx={{ height: 24 }} />}



      <Button
        size="large"
        variant="contained"
        color="primary"
        sx={{
          px: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" width={24} />
      </Button>
    </Stack>
  );

  const renderSummary = (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={{ pt: { md: 5 } }}
    >
      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(2000000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Jobs
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(500000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Successful Hiring
          </Typography>
        </Stack>
      </Stack>

      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(250000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Partners
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(156000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Employee
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderBrands = (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{
        mt: { md: 1 },
      }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgColor
            src={brand.image}
            sx={{
              width: 94,
              height: 28,
              color: 'text.disabled',
            }}
          />
        </Box>
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        pt: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
        backgroundImage: `url(${isDarkMode ? darkModeBgImage : lightModeBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          zIndex: 1,
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isDarkMode
            ? alpha(theme.palette.common.black, 0.8)
            : alpha(theme.palette.common.white, 0.40),
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={8.3}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >



              <Typography
                variant="h6"
                sx={{ color: '#EFEFEF' }}>
                Villarroel, Lecaros y Aste es una firma de gran trayectoria. Fue fundada en 1968 y desde entonces se ha caracterizado por construir relaciones de confianza y de larga data con sus clientes, basada en la excelencia y gran experiencia de sus profesionales, proporcionando una atención personalizada y un apoyo legal ágil y oportuno.
                <br /><br />
                Nuestro estudio cuenta con doctores en derecho, profesores universitarios, ex abogados integrantes de la Corte Suprema y, en general, profesionales de gran prestigio. Nuestra firma promueve y fomenta la participación en el mundo académico y la capacitación permanente de sus abogados, con el fin de mantener un alto estándar de calidad profesional.
                <br /><br />
                Los abogados de Villarroel, Lecaros y Aste se enorgullecen de ser profesionales accesibles, estudiosos, actualizados, con visión creativa y comprometidos con sus clientes.
              </Typography>


            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6}>
              {/* Additional content if needed */}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
