import { FormInputText } from '@/components/Form/Input/FormInputText';
import { useAuth } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { ROLES, Authorization } from '@/lib/authorization';
import { CreateCompetenciaDTO, useCreateCompetencia } from '../api/createCompetencia';
import { User } from '../../users';

const schema = yup.object({
    name: yup.string().required('Campo name é Obrigatório.'),
    description: yup.string().required('Campo description é Obrigatório.')
});

const defaultValues = {
    name: "",
    description: ""
};

type CreateCompetenciaProps = {
    competenciaId: string;
};

export const CreateCompetencia = () => {
    const { user } = useAuth();

    const createCompetenciaMutation = useCreateCompetencia();

    const { handleSubmit, reset, control, setValue, watch } = useForm<CreateCompetenciaDTO>({
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    });

    const onSubmit = async (values: CreateCompetenciaDTO) => {
        await createCompetenciaMutation.mutateAsync({ data: values });
    }

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

                    <Typography variant="h4" component="h3" align="center" >Cadastrar Competência</Typography>
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
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Salvar
                    </Button>

                </Box>
            </Box>
        </Paper>
    );
};
