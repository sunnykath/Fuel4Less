import React, { useState } from "react";
import {Button} from "@material-ui/core"
import { NavLink } from 'react-router-dom';
import "./pages.css"


import NavBar from "../Components/NavBar";
import LoginForm from "../Components/forms/LoginForm"


export default function LogInPage() {
    
    return(
        // <div className="SignInPage">
        <div className="container">
            <nav>
                <NavBar />
            </nav>
            <h1> Fuel 4 Less</h1>
            <LoginForm/>
            <NavLink to="/signUp">
                <Button className="button" variant="contained" color="primary">
                    Sign up as a Customer
                </Button>
            </NavLink>
            {/* <Button className="button" variant="contained" color="primary">
                Sign up as an Admin
            </Button> */}
        </div>
        
    );
}