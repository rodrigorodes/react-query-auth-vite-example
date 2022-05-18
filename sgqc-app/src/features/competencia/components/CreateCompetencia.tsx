import { FormInputText } from '@/components/Form/Input/FormInputText';
import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import * as yup from 'yup';
import { ROLES, Authorization } from '@/lib/authorization';
import { CreateCompetenciaDTO, useCreateCompetencia } from '../api/createCompetencia';
import { ContentLayout } from '@/components/Layout';
import { Form } from '../../../components/Form';

const schema = yup.object({
  name: yup.string().required().min(3),
  description: yup.string().required()
}); 

export const CreateCompetencia = () => {

  const createCompetenciaMutation = useCreateCompetencia();

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
