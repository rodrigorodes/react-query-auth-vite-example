import { Box, Container, Paper, Typography } from '@mui/material';
import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};


export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container component="main" maxWidth="lg">
      <Paper
        variant="elevation"
        elevation={1}
      >
        <Box sx={{
          marginTop: 8,
          paddingTop: 2
        }}>
          <Typography variant="h4" component="h3" align="center" >{title}</Typography>
        </Box >
        <Box marginTop={2} display="flex" flexDirection="row" justifyContent="center" p={1} m={1} bgcolor="background.paper">
          {children}
        </Box >
      </Paper>
    </Container>
  );
};