import { ThemeProvider } from '@mui/material';
import muiTheme from '../utils/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
