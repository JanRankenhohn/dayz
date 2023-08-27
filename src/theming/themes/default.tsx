import {
  createTheme,
} from '@mui/material';

const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem', // Adjust the font size for h1
    },
    h2: {
      fontSize: '2rem', // Adjust the font size for h2
    },
  },
});

export default defaultTheme;
