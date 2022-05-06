import { lazyImport } from '@/utils/lazyImport';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');
const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');


export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  { path: '*', element: <NotFound /> }
];
