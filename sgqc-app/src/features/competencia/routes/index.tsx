import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { CompetenciaPage } from './CompetenciaPage';
import { CompetenciaListaPage } from './CompetenciaListaPage';

export const CompetenciasRoutes = () => {

  const { competenciaId } = useParams();
  console.log(competenciaId);

  return (
    <Routes>
      <Route path="cadastrar" element={<CompetenciaPage />} />
      <Route path="/" element={<CompetenciaListaPage />} />
      <Route path="update/:competenciaId" element={<CompetenciaPage/>} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
