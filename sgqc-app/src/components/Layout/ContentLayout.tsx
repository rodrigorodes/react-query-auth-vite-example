import { Container, Typography } from '@mui/material';
import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};


export const ContentLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Typography variant="h3" component="h1" align="center" >{title}</Typography>
        {children}
      </Container>
    </>
  );
};