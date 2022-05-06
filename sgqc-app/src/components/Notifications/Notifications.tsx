import { Box } from '@mui/material';
import { useNotificationStore } from '@/stores/notifications';
import { Notification } from './Notification';

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <Box 
     display="flex"
     flexDirection="column" 
     alignItems="stretch" 
     padding={1}>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onDismiss={dismissNotification}
          />
        ))}
    </Box>
  );
};
