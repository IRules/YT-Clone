import { ThemeProvider } from '@mui/material';
import muiTheme from '../utils/theme';
import 'regenerator-runtime/runtime'; // needed for voice search
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
