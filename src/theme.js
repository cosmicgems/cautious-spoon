import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ambitiousBlue, blackBeauty, outlandishOrange } from './utils/typography/color';


export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: blackBeauty[900],
    },
    secondary: {
      main: blackBeauty[900],
      subone: blackBeauty[100],
      yellowjs: '#FFEA20'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'mongoose',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md:768,
      lg: 1025,
      xl: 1200,
      xxl: 1536
    }
  }
});
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md:768,
      lg: 1025,
      xl: 1200,
      xxl: 1536
    }
  }});

theme = createTheme((theme), {
  typography: {
    fontFamily: 'mongoose',
    h1: {
      [breakpoints.down('sm')]: {
        fontSize: 96
      },
      [breakpoints.up('sm')]: {
        fontSize: 192
      },
    },
    h2: {
      [breakpoints.down('sm')]: {
        fontSize: 80
      },
      [breakpoints.up('sm')]: {
        fontSize: 160
      },
    },
    h3: {
    },
    h4: {
    },
    h5: {
    },
    h6: {
    },
  },
}) 



export default theme;
