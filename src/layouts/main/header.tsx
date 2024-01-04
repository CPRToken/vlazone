import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { navConfig } from './config-navigation';

import SettingsButton from '../common/settings-button';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />


      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <NavDesktop data={navConfig} />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          <Searchbar />

          <SettingsButton />
        </Stack>


      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>


    </AppBar>
  );
}
