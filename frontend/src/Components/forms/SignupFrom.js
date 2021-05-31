import React, { useState } from "react";
import {Button, Input, TextField} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import "./LoginForm.css"
import axios from "axios";


const EMAIL_VALIDATION_ACCESS_KEY = '5c297cdaae060a41a2e2e1d01b52d153';
var email_valid = true;



function SignupForm(params) {

  const [state, setState] = useState(0);
  const [success, setSuccess] = useState(0);

  const newUser = {
    name: {type: String, value: ""},
    email: {type: String, value: ""},
    username: {type: String, value: ""},
    password: {type: String, value: ""},
    petrolStations: {type: [String], value: []}
}

  function createNewUser() {

    // Validate the email
    axios.get('http://apilayer.net/api/check?access_key='+
    EMAIL_VALIDATION_ACCESS_KEY+
    '&email='+newUser.email+'&smtp=1')
    .then(res => {
      const data = res.data;
      email_valid = (data.format_valid && data.mx_found);
      // console.log(email_valid);

      // Create a new user
      if (email_valid) {
        axios.post("http://localhost:3001/api/users", newUser)
        .then(res => {console.log(res); setSuccess(1)})
        .catch(err => {console.log(err); setSuccess(0)});
      } else {
        setState(state+1);
        console.log("Invalid Email", newUser.email);
        setSuccess(0);
      }

    });
    

  }

  return (
    <div>
      <form className="form">
        
      <TextField
          label="Full Name"
          id="name"
          // formControlProps={{
          //   fullWidth: true
          // }}
          onChange={(e) => {newUser.name = (e.target.value)}}
          type="text"
          style={{margin: 10}}
      /> 
        
      <TextField
          label="Username"
          id="username"
          // formControlProps={{
          //   fullWidth: true
          // }}
          onChange={(e) => {newUser.username = (e.target.value)}}
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
          onChange={(e) => {newUser.email = (e.target.value)}}
          type="text"
          style={{margin: 10}}
          error={!email_valid}
      />
        
      <TextField
          label="Password"
          id="password"
          // formControlProps={{
          //   fullWidth: true
          // }}
          onChange={(e) => {newUser.password = (e.target.value)}}
          type="password"
          style={{margin: 10}}
      />
      <NavLink to={(success) ? "/dashboard" : 0}>
        <Button className="logInButton" variant="contained" color="secondary" 
          onClick={() => createNewUser() }>
          Sign up
        </Button>
      </NavLink>

      </form>
    </div>
  );


}


export default SignupForm;