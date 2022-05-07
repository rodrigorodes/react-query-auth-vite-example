import { Alert, AlertTitle, Button, CircularProgress } from '@mui/material';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../lib/auth';
import { queryClient } from '../lib/react-query';
import { Notifications } from '@/components/Notifications/Notifications';

const ErrorFallback = () => {
  return (

    <Alert severity="warning">
      <AlertTitle>Erro</AlertTitle>
      Ooops, <strong>Ocorreu algum erro ! :</strong>

      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>

    </Alert>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (

    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <CircularProgress />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
            <Notifications />
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
