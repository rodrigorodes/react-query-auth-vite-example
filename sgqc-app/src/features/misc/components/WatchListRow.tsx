import {
  Button,
  Card,
  Box,
  CardActions,
  Grid,
  Typography,
  Avatar,
  Divider
} from '@mui/material';

import { styled } from '@mui/material/styles';
import WatchListRowChart from './WatchListRowChart';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
        position: absolute;
        right: ${theme.spacing(2)};
        top: ${theme.spacing(2)};
`
);

const WatchListRowChartWrapper = styled(WatchListRowChart)(
  ({ theme }) => `
        height: 100px;
`
);

function WatchListRow() {

  const taxa = {
    week: {
      labels: [
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      bitcoin: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
      ethereum: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884],
      cardano: [13, 16, 14, 21, 8, 11, 20]
    }
  };

  return (
    <Card>
      <Grid container spacing={0} alignItems="center">
        <Grid xs={12} md item sx={{ position: 'relative' }}>
          <Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Typography color="secondary">24h</Typography>
            </LabelWrapper>
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/static/images/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Java
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Spring
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography variant="h2" sx={{ pr: 1, mb: 1 }}>
                56%
              </Typography>
              <Typography color="success">
                <b>+12.5%</b>
              </Typography>
            </Box>
            <Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper
                data={taxa.week.bitcoin}
                labels={taxa.week.labels}
              />
            </Box>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid xs={12} md item sx={{ position: 'relative' }}>
          <Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Typography color="secondary">24h</Typography>
            </LabelWrapper>
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ETH"
                  src="/static/images/placeholders/logo/ethereum.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Devops
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Docker
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography variant="h2" sx={{ pr: 1, mb: 1 }}>
                19%
              </Typography>
              <Typography color="error">
                <b>-3.24%</b>
              </Typography>
            </Box>
            <Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper
                data={taxa.week.ethereum}
                labels={taxa.week.labels}
              />
            </Box>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid xs={12} md item sx={{ position: 'relative' }}>
          <Box sx={{ px: 3, pt: 3 }}>
            <LabelWrapper>
              <Typography color="secondary">24h</Typography>
            </LabelWrapper>
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ADA"
                  src="/static/images/placeholders/logo/cardano.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  .Net
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  Core
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography variant="h2" sx={{ pr: 1, mb: 1 }}>
                23%
              </Typography>
              <Typography color="error">
                <b>-0.33%</b>
              </Typography>
            </Box>
            <Box height={100} sx={{ ml: -1.5 }}>
              <WatchListRowChartWrapper
                data={taxa.week.cardano}
                labels={taxa.week.labels}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Card>
  );
}

export default WatchListRow;
