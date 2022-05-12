import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import ThemeProvider from './themes/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { SidebarProvider } from './contexts/SidebarContext';

export const App = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <CssBaseline />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ThemeProvider>
    </SidebarProvider>
  );
}
export default App;
