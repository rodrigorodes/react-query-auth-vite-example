import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { CompetenciaLista } from '../components';
import { CompetenciaTabs } from '../components/CompetenciaTabs';

export const CompetenciaListaPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <CompetenciaTabs />
    </MainLayout>
  );
};
