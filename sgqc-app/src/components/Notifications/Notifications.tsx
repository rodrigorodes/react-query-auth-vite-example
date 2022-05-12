import { Box, Dialog, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNotificationStore } from '@/stores/notifications';
import { Notification } from './Notification';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

export const Notifications = () => {

  const { notifications, dismissNotification } = useNotificationStore();
  const [open, setOpen] = useState(notifications.length > 0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogWrapper
      open={notifications.length > 0}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="md"
      fullWidth
      scroll="paper"
      onClose={handleClose}
    >
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
    </DialogWrapper>
  );

};
