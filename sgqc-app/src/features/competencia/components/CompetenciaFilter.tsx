import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CompetenciaFilter = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/app/competencias/cadastrar');

  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
                Adicionar Grupo
                
      </Button>
    </Box>
  );
};