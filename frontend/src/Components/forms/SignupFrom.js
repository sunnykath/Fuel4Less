import React, { useState } from "react";
import {Button, Input, TextField} from "@material-ui/core";
import "./LoginForm.css"


function SignupForm(params) {

const user = {
    name: String,
    email: String,
    username: String,
    password: String
}

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  // handleChange = e => {
  //   this.setcredentials({ [e.currentTarget.id]: e.currentTarget.value });
  // };

    return (
      <div>
        <form className="form">
          
        <TextField
            label="Full Name"
            id="name"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {user.name = (e.target.value)}}
            type="text"
            style={{margin: 10}}
        /> 
          
        <TextField
            label="Username"
            id="username"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {user.username = (e.target.value)}}
            type="text"
            style={{margin: 10}}
        /> 
        
         {/* Email */}
        <TextField
            label="Email"
            id="email"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {user.email = (e.target.value)}}
            type="text"
            style={{margin: 10}}
        />
          
        <TextField
            label="Password"
            id="password"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {user.password = (e.target.value)}}
            type="password"
            style={{margin: 10}}
        />

        <Button className="logInButton" variant="contained" color="secondary" /*disabled={(password && email) ? 0: 1} onClick={() => { console.log(email,password) }}/*className="form__custom-button"*/>
          Sign up
        </Button>

        </form>
      </div>
    );
}


export default SignupForm;