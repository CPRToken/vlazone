import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { typography } from 'src/theme/typography';

import { palette } from 'src/theme/palette';
import type { AppProps } from 'next/app';
import 'src/global.css';
import {ColorSchema} from "src/theme/palette";



const MyApp = ({ Component, pageProps }: AppProps) => {
  // Get the palette for 'dark' mode
  const { mode, ...themePalette } = palette('light');

  // Create a theme instance with dark mode
  const theme = createTheme({
    palette: {
      mode: 'light', // Set the mode here explicitly
      ...themePalette, // Spread the rest of the palette properties
    },
    typography: typography,
    // ... other theme settings if any
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );

}

export default MyApp;
