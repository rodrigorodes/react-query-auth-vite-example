import { IconButton, Menu, Box, MenuItem, Typography, useTheme, useMediaQuery, styled, List, ListItem, ListItemText } from '@mui/material';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { NavLink } from 'react-router-dom';


type pagesProps = {
  name: string;
  url: string;
}

export type MenuNavigationsProps = {
  pages: pagesProps[];
}

export const MenuItemNavigation = ({ pages }: MenuNavigationsProps) => {

  const navigate = useNavigate();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <List disablePadding component={Box} display="flex">
        <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          component={NavLink}
          to="/dashBoard"
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary="DashBoard"
          />
        </ListItem>
        <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          component={NavLink}
          to="/compentencias"
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary="Compentências"
          />
        </ListItem>
        <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          ref={ref}
          onClick={handleOpen}
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary={
              <Box display="flex" alignItems="center">
                Others
                <Box display="flex" alignItems="center" pl={0.3}>
                  <ExpandMoreTwoToneIcon fontSize="small" />
                </Box>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Menu
        anchorEl={ref.current}
        open={isOpen}
        onClose={handleClose}
      >
        {pages.map((page, index) => (
          <MenuItem sx={{ px: 3 }} key={index} onClick={() => { navigate(page.url); handleClose(); }}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

};