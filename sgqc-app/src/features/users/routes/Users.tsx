import { MainLayout } from '@/components/Layout';
import { Authorization, ROLES } from '@/lib/authorization';

import { CreateUser } from '../components/CreateUser';

export const Users = () => {
  return (
    <Authorization
      forbiddenFallback={<div>Apenas Admin pode acessar.</div>}
      allowedRoles={[ROLES.ADMIN]}
    >
      <MainLayout>
        <CreateUser></CreateUser>
      </MainLayout>
    </Authorization>
  );
};
