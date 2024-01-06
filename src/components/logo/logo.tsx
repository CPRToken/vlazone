import { memo } from 'react';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { RouterLink } from 'src/routes/components';

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';

  // Specify paths for dark and light mode logos
  const darkModeLogoPath = '/assets/logo/VLA.svg';
  const lightModeLogoPath = '/assets/logo/VLA-DARK.svg';

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 'auto' : 'auto', // Adjust the size as needed
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          justifyContent: 'flex-start',
          ...sx,
        }}
      >
        <img
          src={isDarkMode ? darkModeLogoPath : lightModeLogoPath}
          alt="VLA Logo"
          style={{
            width: single ? '140px' : '120px',
            height: 'auto',
            maxWidth: 'none',
          }}
        />
      </Box>
    </Link>
  );
}

export default memo(Logo);
