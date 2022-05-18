import { Button, Box, Grid } from '@mui/material';
import { FormInputText } from '@/components/Form/Input/FormInputText';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../../components/Form';
import * as yup from 'yup';
import Label from '../../../components/Label';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object({
  codigo: yup.string().required().min(3)
});

type CompetenciaFilterDTO = {
  codigo: string;
  nome: string;
  dataCriacao: string;
}

const defaultValues = {
  codigo: '',
  nome: '',
  dataCriacao: '',
};

export const CompetenciaFilter = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/app/competencias/cadastrar');


  const { handleSubmit, control } = useForm<UpdateCompetenciaDTO>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (values: CompetenciaFilterDTO) => {
    console.log(values);
  };

  return (
    <>
      <Box sx={{
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Adicionar Grupo

        </Button>
      </Box>
      <Box sx={{
        marginTop: 1,
        display: 'flex',
        alignItems: 'center',
      }}>

        <Box component="form" sx={{ mt: 2 }}>
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            alignItems: 'center',
          }}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={4}>
                <FormInputText name="codigo" control={control} label="Código" />
              </Grid>
              <Grid item xs={3} sm={4}>
                <FormInputText name="nome" control={control} label="Nome" />
              </Grid>
              <Grid item xs={3} sm={4}>
                <FormInputText name="dataCriacao" control={control} label="Data da Criação" />
              </Grid>

            </Grid>
          </Box>

        </Box>

      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Filtrar
        </Button>
      </Box>
    </>
  );
};