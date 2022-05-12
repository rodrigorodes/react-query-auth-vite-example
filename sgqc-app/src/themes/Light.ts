// Material UI configuration file
import {
  yellow,
  cyan,
  purple,
  blue,
  lightGreen,
  lightBlue,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ptPT } from '@mui/material/locale';

// declare module '@mui/material/styles' {
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }

// const theme = createTheme({
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         outlinedPrimary: { color: 'red'},

//         // Name of the slot
//         root: {
//           // Some CSS
//           fontSize: "1000rem!important",
//           background: "#DDB61A", // Some CSS
//           minWidth: "10px",
//           borderRadius: "6px",
//         },
//       },
//     },
//   },
// });

export const LightTheme = createTheme(
  {
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: lightBlue[500],
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            minWidth: '10px',
            borderRadius: '6px',
          },
        },
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {},
      h1: {
        fontSize: '32px',
        fontWeight: 400,
      },
      h2: {
        fontSize: '28px',
      },
      h3: {
        fontSize: '26px',
      },
      h4: {
        fontSize: '22px',
        fontWeight: 700,
      },
      h5: {
        fontSize: '20px',
      },
      h6: {
        fontSize: '18px',
        fontWeight: 500,
      },
      body2: {},
      subtitle1: {},
      subtitle2: {},
    },
    palette: {
      primary: {
        main: blue[700],
        dark: blue[800],
        light: blue[500],
        contrastText: '#ffffff',
      },
      secondary: {
        main: cyan[500],
        dark: cyan[400],
        light: cyan[300],
        contrastText: '#ffffff',
      },
      background: {
        paper: '#ffffff',
        default: '#f7f6f3',
      },
    },
  },
  ptPT
);
