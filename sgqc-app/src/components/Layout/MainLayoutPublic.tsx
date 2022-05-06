import { Container, Typography } from '@mui/material';
import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};


export const MainLayoutPublic = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Container>
        <Typography variant="h3" component="h2" align="center" >{title}</Typography>
        {children}
      </Container>
    </>
  );
};