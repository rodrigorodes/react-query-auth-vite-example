import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Dashboard, Landing } from '@/features/misc';
import { NotFound } from '@/features/misc';
import { useAuth } from '@/lib/auth';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [
    { path: '/', element: <Landing /> }
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
