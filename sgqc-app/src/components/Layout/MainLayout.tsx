import { Container, Typography } from '@mui/material';
import * as React from 'react';
import { AppBarCustom } from '../AppBarCustom';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};


export const MainLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};