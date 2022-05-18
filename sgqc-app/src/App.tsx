import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import ThemeProvider from './themes/ThemeProvider';
import { CssBaseline } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export const App = () => {

  return (
    <AppProvider>
      <ThemeProvider>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </AppProvider>
  );
}
export default App;
