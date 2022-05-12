import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};


export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        {children}
      </Container>
      <Footer></Footer>
    </>
  );
};