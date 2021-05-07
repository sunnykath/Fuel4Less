import { Button, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
/* <div className={styles.navBar}>
            <NavLink to="/signIn" activeClassName={styles.activeLink}>Sign In</NavLink>
            <NavLink to="/dashboard" activeClassName={styles.activeLink}>Dashboard</NavLink>
            <NavLink to="/maps" activeClassName={styles.activeLink}>Map</NavLink>
        </div> */

        //{list(anchor)}


    const [open, setOpen] = useState(false);

        const toggleDrawer = (open) => (event) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
            setOpen(open);
        };
    return (
        <div>
            <Button onClick={toggleDrawer(true)}>NavDrawer</Button>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                onClick={toggleDrawer(false)}
                >
                <NavLink to="/signIn" activeClassName={styles.activeLink}>Sign In</NavLink>
                <NavLink to="/dashboard" activeClassName={styles.activeLink}>Dashboard</NavLink>
                <NavLink to="/maps" activeClassName={styles.activeLink}>Map</NavLink>
            </SwipeableDrawer>
        </div>
    );

        
}