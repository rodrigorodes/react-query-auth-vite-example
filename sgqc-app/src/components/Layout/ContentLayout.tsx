import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Paper
        variant="elevation"
        elevation={1}
      >
        <Box sx={{
          paddingTop: 2
        }}>
          <Typography variant="h4" component="h3" align="center" >{title}</Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1} >
            {children}
          </Box >
        </Box >
      </Paper>
    </>
  );
};