
import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography, Link } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputText } from '@/components/Form/Input';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';
import { Notifications } from '../../../components/Notifications';
import { ContentLayout } from '../../../components/Layout';
import { Layout } from './Layout';

const schema = yup.object({
  email: yup.string().required('Campo email é Obrigatório.'),
  password: yup.string().required('Campo Senha é Obrigatório.')
});

type LoginValues = {
    email: string;
    password: string;
};

const defaultValues = {
  email: '',
  password: ''
};

type LoginFormValues = {
    onSuccess: (data: LoginValues) => void;
};

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const LoginForm = ({ onSuccess }: LoginFormValues) => {

  const { login, isLoggingIn } = useAuth();
  const [error, setError] = useState(null);


  const { handleSubmit, control } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });

  const onSubmit = async (data: LoginValues) => {
    try {
      await login(data);
      onSuccess(data);
    } catch (err) {
      setError(err);
    }
  };

  return (

    <Layout title='Login'>
      <Box component="form" sx={{ mt: 2 }}>
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
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
                            Esqueceu a senha?
            </Link>
          </Grid>
        </Grid>
         <Copyright sx={{ mt: 5 }} />
      </Box>
    </Layout>
  );

};