import { Suspense, SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Card, CardHeader, CardContent, Divider, CircularProgress } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { lazyImport } from '@/utils/lazyImport';


const { CompetenciaTabPanel } = lazyImport(() => import('./CompetenciaTabPanel'), 'CompetenciaTabPanel');
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <CircularProgress />
        </div>
      }
    >
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    </Suspense>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CompetenciaTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Tabs - Components</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Competências" />
              <Divider />
              <CardContent>
                <Box sx={{ width: '100%' }}>
                  <Tabs variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Grupo" {...a11yProps(0)} />
                    <Tab label="Tipos" {...a11yProps(1)} />
                    <Tab label="Âmbito" {...a11yProps(2)} />
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    <CompetenciaTabPanel title='Grupo'></CompetenciaTabPanel>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CompetenciaTabPanel title='Tipos'></CompetenciaTabPanel>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <CompetenciaTabPanel title='Âmbito'></CompetenciaTabPanel>
                  </TabPanel>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );

};