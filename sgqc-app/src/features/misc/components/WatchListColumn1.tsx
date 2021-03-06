import { Card, Box, Typography, Avatar } from '@mui/material';

import { styled } from '@mui/material/styles';
import WatchListColumn1Chart from './WatchListColumn1Chart';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`
);

const WatchListColumn1ChartWrapper = styled(WatchListColumn1Chart)(
  ({ theme }) => `
        height: 130px;
`
);

function WatchListColumn1() {

  const price = {
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
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  };

  return (
    <Card>
      <Box sx={{ p: 3 }}>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
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
            <b>+12.5% Ultimo Dia</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Typography color="success">30%</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
            30 dias
          </Typography>
        </Box>
      </Box>
      <Box height={130} sx={{ ml: -1.5 }}>
        <WatchListColumn1ChartWrapper
          data={price.week.data}
          labels={price.week.labels}
        />
      </Box>
    </Card>
  );
}

export default WatchListColumn1;
