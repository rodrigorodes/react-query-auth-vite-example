import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../../lib/auth';

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

const handleLogout = () => {

};

export const AppBarCustom = () => {
    const { user, logout } = useAuth();
    const classes = useStyles();

    return (
        <AppBar color="primary" position="static" >
            <Toolbar>
                <Box display="flex" >
                    <Typography variant="h6" noWrap>
                        <div className={classes.navlinks}>
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                            <Link to="/sobre" className={classes.link}>
                                Sobre
                            </Link>
                            <Link to="/competencias" className={classes.link}>
                                Competências
                            </Link>
                            <Link to="/" className={classes.link}>
                                Contactos
                            </Link>
                            <Button onClick={() => logout()} className={classes.link}>
                                Sair
                            </Button>
                        </div>
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    );
}