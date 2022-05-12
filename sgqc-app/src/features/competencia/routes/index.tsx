import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { CompetenciaPage } from './CompetenciaPage';
import { CompetenciaListaPage } from './CompetenciaListaPage';

export const CompetenciasRoutes = () => {
  return (
    <Routes>
      <Route path="cadastrar" element={<CompetenciaPage />} />
      <Route path="/" element={<CompetenciaListaPage />} />
      <Route path="detalhe/:competenciaId" element={<CompetenciaPage/>} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
