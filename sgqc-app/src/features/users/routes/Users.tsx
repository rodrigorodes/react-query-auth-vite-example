import { ContentLayout } from '@/components/Layout';
import { Authorization, ROLES } from '@/lib/authorization';

import { UsersList } from '../components/UsersList';

export const Users = () => {
  return (
    <Authorization
      forbiddenFallback={<div>Apenas Admin pode acessar.</div>}
      allowedRoles={[ROLES.ADMIN]}
    >
      <ContentLayout title='Consultar Usuário'>
      </ContentLayout>
    </Authorization>
  );
};
