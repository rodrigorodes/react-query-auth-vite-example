import { Route, Routes } from 'react-router-dom';
import { CompetenciaPage } from './CompetenciaPage';
import { CompetenciaListaPage } from './CompetenciaListaPage';

export const CompetenciasRoutes = () => {
  return (
    <Routes>
      <Route path="cadastrar" element={<CompetenciaPage />} />
      <Route path="/" element={<CompetenciaListaPage />} />
    </Routes>
  );
};
