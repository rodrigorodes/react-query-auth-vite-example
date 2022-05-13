import { FormInputText } from '@/components/Form/Input/FormInputText';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ROLES, Authorization } from '@/lib/authorization';
import { CreateCompetenciaDTO, useCreateCompetencia } from '../api/createCompetencia';
import uuid from 'react-uuid';
import { ContentLayout } from '@/components/Layout';
import { Form } from '../../../components/Form';

const schema = yup.object({
  name: yup.string().required().min(3),
  description: yup.string().required()
});

const defaultValues = {
  id: uuid(),
  name: '',
  description: ''
};

export const CreateCompetencia = () => {

  const createCompetenciaMutation = useCreateCompetencia();

  const { handleSubmit, control } = useForm<CreateCompetenciaDTO>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });

  const onSubmit = async (values: CreateCompetenciaDTO) => {
    await createCompetenciaMutation.mutateAsync({ data: values });
  };

  return (
    <ContentLayout
      title='Cadastrar Competência'
    >
      <Form<CreateCompetenciaDTO['data'], typeof schema>
        id="create-competencia"
        onSubmit={async (values) => {
          await createCompetenciaMutation.mutateAsync({ data: values });
        }}
        schema={schema}
      >
        {({ control }) => (
          <>
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
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Receber Notificações"
                  />
                </Grid>
              </Authorization>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Salvar
            </Button>
          </>
        )}
      </Form>

    </ContentLayout>
  );
};
