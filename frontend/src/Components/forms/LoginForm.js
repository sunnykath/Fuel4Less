import React, { useState } from "react";
import {Button, Input, TextField} from "@material-ui/core";

import { NavLink } from 'react-router-dom';
import "./LoginForm.css"


// import "./styles.css";
// import CustomInput from "./components/CustomInput";
// import Button from "./components/Button";

// export default class LoginForm extends Component {

function LoginForm(params) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleChange = e => {
  //   this.setcredentials({ [e.currentTarget.id]: e.currentTarget.value });
  // };

    return (
      <div>
        <form className="form">
          
          <TextField
            label="Email"
            id="email"
            // formControlProps={{
            //   fullWidth: true
            // }}
            onChange={(e) => {setEmail(e.target.value)}}
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

          <NavLink to={(password && email) ? "/maps" : 0}>
            <Button className="logInButton" variant="contained" color="secondary" disabled={(password && email) ? 0: 1} onClick={() => { console.log(email,password) }}/*className="form__custom-button"*/>
              Log in
            </Button>
          </NavLink>          
         

        </form>
      </div>
    );
}


export default LoginForm;