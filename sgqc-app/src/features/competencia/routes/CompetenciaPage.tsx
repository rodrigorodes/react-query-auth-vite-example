import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { CompetenciaForm } from '../components';
import { Typography } from '@mui/material';

type CreateCompetenciaProps = {
  competenciaId: string;
};

export const CompetenciaPage = ({ competenciaId }: CreateCompetenciaProps) => {
  const navigate = useNavigate();

  return (
    <MainLayout title="c">
      <CompetenciaForm  />
    </MainLayout>
  );
};
