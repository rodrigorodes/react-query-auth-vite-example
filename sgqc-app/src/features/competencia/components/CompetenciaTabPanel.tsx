import { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import { formatDistance, subMinutes, subHours } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import { ContentLayout } from '@/components/Layout';
import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CompetenciaLista } from './CompetenciaLista';
import { CompetenciaFilter } from './CompetenciaFilter';

export type CompetenciaTabPanelProps = {
    children?: React.ReactNode;
    title?: string;
}

export const CompetenciaTabPanel = (props: CompetenciaTabPanelProps) => {

  const { children, title } = props;

  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>Aqui pode consultar ou adicionar novos grupos na tabela auxiliar.</Typography>
      <Box>
        <Grid item xs={12}>
          <Typography>Pesquisar</Typography>
          <CompetenciaFilter></CompetenciaFilter>

        </Grid>
      </Box>
        
      <Grid item xs={12}>
        <CompetenciaLista onSuccess={
          (data) => {
            navigate('/');
          }
        }></CompetenciaLista>
      </Grid>


    </Box>
  );

};