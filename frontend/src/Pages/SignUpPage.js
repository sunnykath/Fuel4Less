import React, { useState } from "react";
import {Button} from "@material-ui/core"
import { NavLink } from 'react-router-dom';
import "./pages.css"

import NavBar from "../Components/NavBar";
import SignUpForm from "../Components/forms/SignupFrom"


export default function SignInPage() {
    
    return(
        // <div className="SignInPage">
        <div className="container">
            <nav>
                <NavBar />
            </nav>
            {/* <h1> Fuel 4 Less</h1> */}
            <h2 style={{color: "blue"}}> Admin Sign Up</h2>
            <SignUpForm />
            <NavLink to="/logIn">
                <Button className="button"  color="primary">
                    Cancel
                </Button>
            </NavLink>
            
           
        </div>
        
    );
}