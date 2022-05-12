import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material';
import { FormInputText } from '@/components/Form/Input/FormInputText';
import { useAuth } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ROLES, Authorization } from '@/lib/authorization';
import { UpdateCompetenciaDTO, useUpdateCompetencia } from '../api/updateCompetencia';
import { User } from '../../users';
import { getCompetenciasQuery } from '../api/getCompetencias';
import { useCompetencia } from '../api/getCompetencia';

const schema = yup.object({
  name: yup.string().required('Campo name é Obrigatório.'),
  description: yup.string().required('Campo description é Obrigatório.')
});

type UpdateCompetenciaProps = {
    competenciaId: string;
};

export const UpdateCompetencia = ({ competenciaId }: UpdateCompetenciaProps) => {
  const { user } = useAuth();

  const useCompetenciaQuery = useCompetencia({ competenciaId });
  console.log('useCompetenciaQuery' + useCompetenciaQuery);

  const updateCompetenciaMutation = useUpdateCompetencia();

  const defaultValues = {
    name: useCompetenciaQuery.data?.name,
    description: useCompetenciaQuery.data?.description,
  };

  console.log(defaultValues);

  const { handleSubmit, reset, control, setValue, watch } = useForm<UpdateCompetenciaDTO>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (values: UpdateCompetenciaDTO) => {
    await updateCompetenciaMutation.mutateAsync({ data: values, competenciaId });
  };

  return (
    <Paper
      variant="elevation"
      elevation={1}
    >
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <Box component="form" sx={{ mt: 2 }}>

          <Typography variant="h4" component="h3" align="center" >Alterar Competência</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormInputText name="name" control={control} label="Nome" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInputText name="description" control={control} label="Descrição" />
            </Grid>
            <Authorization allowedRoles={[ROLES.ADMIN]}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={true} value="notification" color="primary" />}
                  label="Receber Notificações"
                />
              </Grid>
            </Authorization>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
                        Alterar
          </Button>

        </Box>
      </Box>
    </Paper>
  );
};
