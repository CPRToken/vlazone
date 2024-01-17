// Importing necessary components
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import AbogadosLandingView from "src/sections/_abogados/view/abogados-landing-view";

// Define metadata (if needed)
export const metadata = {
  title: 'The starting point for your next project',
};

// Combined Component
export default function HomePage() {
  const theme = useTheme();



  // Define custom style for the header background color
  const headerStyle = {
    backgroundColor: 'black', // Replace 'desired-color' with your desired background color
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Pass the custom style to the Header component */}


      <AbogadosLandingView />
    </ThemeProvider>
  );
}
