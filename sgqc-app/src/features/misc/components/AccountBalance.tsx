import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';

import { styled } from '@mui/material/styles';
import TrendingUp from '@mui/icons-material/TrendingUp';
import AccountBalanceChart from './AccountBalanceChart';

const AccountBalanceChartWrapper = styled(AccountBalanceChart)(
  () => `
      width: 100%;
      height: 100%;
`
);
const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

function AccountBalance() {
  
  const cryptoBalance = {
    datasets: [
      {
        data: [20, 10, 40, 30],
        backgroundColor: ['#ff9900', '#1c81c2', '#333', '#5c6ac0']
      }
    ],
    labels: ['Java', '.Net', 'JS', 'Container']
  };

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Competências
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                80%
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                100% Total Competências
              </Typography>
              <Box display="flex" sx={{ py: 4 }} alignItems="center">
                <AvatarSuccess sx={{ mr: 2 }} variant="rounded">
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">+ 12%</Typography>
                  <Typography variant="subtitle2" noWrap>
                    Java
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="outlined">
                  Send
                </Button>
              </Grid>
              <Grid sm item>
                <Button fullWidth variant="contained">
                  Receive
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{ position: 'relative' }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Hidden mdDown>
            <Divider absolute orientation="vertical" />
          </Hidden>
          <Box p={4} flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box style={{ height: '160px' }}>
                  <AccountBalanceChartWrapper data={cryptoBalance} />
                </Box>
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List disablePadding sx={{ width: '100%' }}>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        alt="JAVA"
                        src="/static/images/placeholders/logo/bitcoin.png"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="JAVA"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Spring"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        20%
                      </Typography>
                      <Typography color="success">+2.54%</Typography>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        alt="JS"
                        src="/static/images/placeholders/logo/ripple.png"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="JS"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="React"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        10%
                      </Typography>
                      <Typography color="error">-1.22%</Typography>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        alt=".Net"
                        src="/static/images/placeholders/logo/cardano.png"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary=".Net"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Core"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        40%
                      </Typography>
                      <Typography color="success">+10.50%</Typography>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        alt="ETH"
                        src="/static/images/placeholders/logo/ethereum.png"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Devops"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Docker"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        30%
                      </Typography>
                      <Typography color="error">-12.38%</Typography>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
