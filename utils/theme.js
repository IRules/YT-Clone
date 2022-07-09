import { createTheme } from '@mui/material';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: 'dark',
      main: '#ff0000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f1f2f3',
      contrastText: '#fff',
    },
  },
});

export default muiTheme;
