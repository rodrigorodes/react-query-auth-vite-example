import { useNavigate, useParams } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { CreateCompetencia, UpdateCompetencia } from '../components';
import { Authorization, ROLES } from '@/lib/authorization';

type CreateCompetenciaProps = {
  competenciaId: string | null;
};

export const CompetenciaPage = () => {
  const { competenciaId } = useParams();
  console.log(competenciaId);
  
  return (
    <MainLayout title="c">
      {competenciaId != null
        ? <Authorization
          forbiddenFallback={<div>Apenas Admin pode aceder.</div>}
          allowedRoles={[ROLES.ADMIN]}><UpdateCompetencia competenciaId={competenciaId} />
        </Authorization>
        : <CreateCompetencia />}
    </MainLayout>
  );
};
