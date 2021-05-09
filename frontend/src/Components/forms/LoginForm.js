import React, { useState } from "react";
import {Button, Input, TextField} from "@material-ui/core";
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import "./LoginForm.css"



function LoginForm(params) {


  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  function authenticateUser() {

    // Run a database query for username
    const user = await axios.get()
    // Check Password

    // Redirect to Admin DashBoard
    
  }


  

    return (
      <div>
        <form className="form">
          
          <TextField
            label="Usernmae"
            id="username"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {setUsername(e.target.value)}}
            type="text"
            style={{margin: 10}}
          />
          
          <TextField
            label="Password"
            id="password"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            style={{margin: 10}}
          />

          <NavLink to={(password && userName) ? "/maps" : 0}>
            <Button className="logInButton" variant="contained" color="secondary" 
            disabled={(password && userName) ? 0: 1} onClick={() => authenticateUser()}>
              Log in
            </Button>
          </NavLink>      
          
              
         

        </form>
      </div>
    );
}


export default LoginForm;