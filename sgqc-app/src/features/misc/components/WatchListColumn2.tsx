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
  () => `
        height: 130px;
`
);

function WatchListColumn2() {

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
      data: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884]
    }
  };

  return (
    <Card>
      <Box sx={{ p: 3 }}>
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
            20%
          </Typography>
          <Typography color="error">
            <b>-3.24% Ultimo Dia</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Typography color="error">80%</Typography>
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

export default WatchListColumn2;
