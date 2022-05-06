
import React from 'react';
import { Box, Button, Grid, Paper, Typography, Link } from '@mui/material';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputText } from '@/components/Form/Input';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';

const schema = yup.object({
    email: yup.string().required('Campo email é Obrigatório.'),
    password: yup.string().required('Campo Senha é Obrigatório.')
});

type LoginValues = {
    email: string;
    password: string;
};

const defaultValues = {
    email: "",
    password: ""
};

type LoginFormValues = {
    onSuccess: (data: LoginValues) => void;
};

export const LoginForm = ({ onSuccess }: LoginFormValues) => {

    const { login, isLoggingIn } = useAuth();


    const { handleSubmit, control } = useForm<LoginFormValues>({
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    });

    const onSubmit = (data: LoginValues) => {
        login(data);
        onSuccess(data);
    }

    return (


        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Paper
                variant="elevation"
                elevation={0}
            >
                <Box component="form" sx={{ mt: 2 }}>

                    <Typography variant="h4" component="h3" align="center" >Login</Typography>
                    <FormInputText name="email" control={control} label="E-mail" />
                    <FormInputText name="password" control={control} label="Senha" />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Entrar
                    </Button>
                    <Grid  container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );

}