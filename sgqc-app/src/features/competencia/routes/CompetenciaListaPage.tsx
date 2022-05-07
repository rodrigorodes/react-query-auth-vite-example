import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/Layout';
import { CompetenciaLista } from '../components';

export const CompetenciaListaPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Consultar Competências">
      <CompetenciaLista onSuccess={
        (data) => {
          navigate('/')
        }
      } />
    </MainLayout>
  );
};
