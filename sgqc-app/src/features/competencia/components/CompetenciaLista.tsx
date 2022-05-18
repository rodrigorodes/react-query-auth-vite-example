import { Box, Button, Paper, Typography, CircularProgress, Grid, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../components/DataTable/DataTable';
import { ContentLayout } from '../../../components/Layout';
import { getCompetenciasQuery } from '../api/getCompetencias';

export const CompetenciaLista = () => {

  const competenciasQuery = getCompetenciasQuery();



  if (competenciasQuery.isLoading) {
    return (
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Grid item>
          <LinearProgress variant='indeterminate' />
        </Grid>
      </Box>
    );
  }

  if (!competenciasQuery.data) return null;

  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <DataTable data={competenciasQuery.data}></DataTable>
    </Box>
  );
};

