import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import AccountBalance from '../components/AccountBalance';
import { MainLayout } from '@/components/Layout';
import WatchList from '../components/WatchList';
import Footer from '../../../components/Footer';

export const Dashboard = () => {
  return (
    <>
      <MainLayout>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
          </Grid>
          <Grid item lg={4} xs={12}>
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};
