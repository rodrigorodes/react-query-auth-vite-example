import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import  {LightTheme} from './themes/Light';
import { ThemeProvider } from '@mui/material';

export const App = ()  => {
  return (
    <ThemeProvider theme={LightTheme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  );
}
export default App;
