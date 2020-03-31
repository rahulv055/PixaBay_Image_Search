import React from 'react';
import { AppBar,Toolbar,Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const NavBar = () => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                PixaBey Image Finder
            </Typography>
        </Toolbar>
    </AppBar>
);

export default NavBar;