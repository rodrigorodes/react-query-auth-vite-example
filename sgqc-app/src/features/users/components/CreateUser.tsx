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


export const CreateUser = () => {

  return (
    <ContentLayout
      title='Cadastrar Usuário'
    >
      
    </ContentLayout>
  );
};
