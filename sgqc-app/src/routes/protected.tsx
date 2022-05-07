import { CircularProgress, Box, Paper } from '@mui/material';
import { Suspense } from 'react';
import { Navigate, Outlet, redire, useNavigate } from 'react-router-dom';
import { AppBarCustom } from '@/components/AppBarCustom';
import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';
import { useAuth } from '../lib/auth';
import storage from '../utils/storage';
import { queryClient } from '../lib/react-query';
import { Redirect } from 'react-router-dom';
import { Notifications } from '../components/Notifications';

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
const { CompetenciasRoutes } = lazyImport(() => import('@/features/competencia'), 'CompetenciasRoutes');
const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');
const { Users } = lazyImport(() => import('@/features/users'), 'Users');

const App = () => {
  return (
    <>
      <AppBarCustom />
      <MainLayout title=''>
        <Suspense
          fallback={
            <div>
              <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
    </>
  );
};


export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/users', element: <Users /> },

      { path: '*', element: <Navigate to="." /> },
      {
        path: '/competencias/*',
        element: <CompetenciasRoutes />
      }
    ],
  },
];
