import { Box, Button, Container, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react'


// const icons = {
//   info: <InformationCircleIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />,
//   success: <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />,
//   warning: <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />,
//   error: <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />,
// };

export type NotificationProps = {
  notification: {
    id: string;
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { id, title, message },
  onDismiss,
}: NotificationProps) => {

  const [isShowing, setIsShowing] = useState(false)


  return (
    <>
      <Transition
        show={true}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1} bgcolor="background.paper">
          <Box sx={{ width: 500 }}>
            <Typography variant="h2" component="h3">{title}</Typography>
            <Typography variant="h4" component="p">{title}</Typography>
            <Typography variant="h4" component="p">{message}</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onDismiss(id);
            }}
          >
            Fechar
          </Button>
        </Box>
      </Transition>
    </>
  );
};
