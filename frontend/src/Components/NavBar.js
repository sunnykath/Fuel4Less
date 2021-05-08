import { Button, List, ListItem, ListItemText, IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState }  from 'react';

import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {


    const [open, setOpen] = useState(false);

        const toggleDrawer = (open) => (event) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
            setOpen(open);
        };
    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon/ >
            </IconButton>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                onClick={toggleDrawer(false)}
                >
                <NavLink to="/logIn" activeClassName={styles.activeLink}>Log In</NavLink>
                <NavLink to="/dashboard" activeClassName={styles.activeLink}>Dashboard</NavLink>
                <NavLink to="/maps" activeClassName={styles.activeLink}>Map</NavLink>
                <NavLink to="/signUp" activeClassName={styles.activeLink}>Sign Up</NavLink>
            </SwipeableDrawer>
        </div>
    );

        
}