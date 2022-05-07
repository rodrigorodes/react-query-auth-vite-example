import { useNavigate, useParams } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { CreateCompetencia, UpdateCompetencia } from '../components';
import { Authorization, ROLES } from '@/lib/authorization';
import { useCompetencia } from '../api/getCompetencia';
import { Box, CircularProgress } from '@mui/material';

export const CompetenciaPage = () => {
  const { competenciaId } = useParams();

  if (competenciaId) {
    const useCompetenciaQuery = useCompetencia({ competenciaId });

    if (useCompetenciaQuery.isLoading) {
      return (
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <CircularProgress />
        </Box>
      );
    }

    if (!useCompetenciaQuery.data) return null;
  }

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
