import { Button, List, ListItem, ListItemText, IconButton, SwipeableDrawer, Typography, Card, CardContent } from '@material-ui/core';
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
            <div style={{
                display: 'flex',
                alignItems: 'left',
                flexWrap: 'wrap',
                paddingLeft: 20,
            }}>
                <IconButton onClick={toggleDrawer(true)} edge="start">
                <MenuIcon/ >
            </IconButton>
            
            <h2 style={{color: "red", alignSelf: "center" }}> Fuel 4 Less</h2>
            </div>
            
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                onClick={toggleDrawer(false)}>
                    <Card >
                        <CardContent >
                            <NavLink to="/logIn" >
                                <Typography variant="h7" component="h2" align="left" fontSize={10} color="textPrimary">
                                    Log In
                                </Typography>
                            </NavLink>
                        </CardContent>
                    </Card>

                    <Card >
                        <CardContent >
                            <NavLink to="/dashboard" >
                                <Typography variant="h7" component="h2" align="left" fontSize={20} color="textPrimary">
                                    Dashboard
                                </Typography>
                            </NavLink>
                        </CardContent>
                    </Card>

                    <Card >
                        <CardContent >
                            <NavLink to="/maps" >
                                <Typography variant="h7" component="h2" align="left" fontSize={20} color="textPrimary">
                                    Map
                                </Typography>
                            </NavLink>
                        </CardContent>
                    </Card>

                    <Card >
                        <CardContent >
                            <NavLink to="/signUp" >
                                <Typography variant="h7" component="h2" align="left" fontSize={20} color="textPrimary">
                                     Sign Up
                                </Typography>
                            </NavLink>
                        </CardContent>
                    </Card>
            </SwipeableDrawer>
        </div>
    );

        
}