import React, { useState } from "react";
import {Button} from "@material-ui/core"

import NavBar from "../Components/NavBar";
import LoginForm from "../Components/forms/LoginForm"


export default function SignInPage() {
    
    return(
        // <div className="SignInPage">
        <div>
            <nav>
                <NavBar />
            </nav>
            <h1> Fuel 4 Less</h1>
            <LoginForm/>
            <Button variant="contained" color="primary">
                Sign up
            </Button>
        </div>
        
    );
}