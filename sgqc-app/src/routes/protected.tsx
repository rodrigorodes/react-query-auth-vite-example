import { CircularProgress, Box } from '@mui/material';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppBarCustom } from '@/components/AppBarCustom';
import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';
import Footer from '../components/Footer';
import Header from '../components/SidebarLayout/Header';
import SidebarLayout from '../components/SidebarLayout';
import BaseLayout from '../components/Layout/BaseLayout';


const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
const { CompetenciasRoutes } = lazyImport(() => import('@/features/competencia'), 'CompetenciasRoutes');
const { Users } = lazyImport(() => import('@/features/users'), 'Users');
const { Overview } = lazyImport(() => import('@/features/overview'), 'Overview');

const { Status404 } = lazyImport(() => import('@/features/status'), 'Status404');
const { Status500 } = lazyImport(() => import('@/features/status'), 'Status500');
const { StatusComingSoon } = lazyImport(() => import('@/features/status'), 'StatusComingSoon');
const { StatusMaintenance } = lazyImport(() => import('@/features/status'), 'StatusMaintenance');

const App = () => {

  const pages = [
    { name: 'Competências', url: '/competencias' },
    { name: 'Dashboard', url: '/dashboard' },
  ];

  const settings = [
    { name: 'Usuário', url: '/users' },
  ];

  return (
    <>
      {/* <AppBarCustom
        pages={pages} 
        settings={settings}
      />   */}

      <Header></Header>
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
      <Footer />
    </>
  );
};


export const protectedRoutes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Overview />
      },
      {
        path: 'overview',
        element: (
          <Navigate
            to="/"
            replace
          />
        )
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: (
              <Navigate
                to="404"
                replace
              />
            )
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          },
        ]
      },
      {
        path: '*',
        element: <Status404 />
      },
    ]
  },
  {
    path: '/app',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/app/dashboard"
            replace
          />
        )
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'competencias/*',
        element: <CompetenciasRoutes />
      },
     
    ],
  },
];
