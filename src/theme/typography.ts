import { Public_Sans, Marcellus, Cormorant_Garamond, Playfair_Display, Montserrat  } from 'next/font/google';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
    fontTertiaryFamily: React.CSSProperties['fontFamily'];
    fontQuaternaryFamily: React.CSSProperties['fontFamily'];
    fontQuinaryFamily: React.CSSProperties['fontFamily'];


  }
}

export const primaryFont = Public_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const secondaryFont = Marcellus({
  weight: ['400'], // Only include the available weight
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


export const tertiaryFont = Cormorant_Garamond({
  weight: ['300', '400','500','700'], // Example weights, you can choose what you need
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const quaternaryFont = Playfair_Display({
  weight: ['400','500', '700'], // Example weights, adjust as needed
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'], // Fallback to a generic serif font
});

export const quinaryFont = Montserrat({
  weight: ['100','200', '300','400','500', '700'], // Example weights, adjust as needed
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'], // Fallback to a generic serif font
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontSecondaryFamily: secondaryFont.style.fontFamily,
  fontTertiaryFamily: tertiaryFont.style.fontFamily,
  fontQuaternaryFamily: quaternaryFont.style.fontFamily,
  fontQuinaryFamily: quinaryFont.style.fontFamily,
  fontWeightThin: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    fontFamily: secondaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(28),
    fontFamily: tertiaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 64 / 48,
    fontSize: pxToRem(28),
    fontFamily: tertiaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h4: {
    fontWeight: 300,
    lineHeight: 1,
    fontSize: pxToRem(30),
    fontFamily: quaternaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 200,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    fontFamily: secondaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight:  1.6,
    fontSize: pxToRem(20),
    fontFamily: tertiaryFont.style.fontFamily,
    ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.4,
    fontSize: pxToRem(20),
    fontFamily: tertiaryFont.style.fontFamily,
  },
  body2: {
    lineHeight: 1.3,
    fontSize: pxToRem(19),
  },


  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
} as const;
