import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import { AuthService } from "../services/authorization";

const signUp = new AuthService();
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    phoneNumber: ""
  };
  handleChange = (event: any, field: any) => {
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = async () => {
    const { email, password, phoneNumber } = this.state;
    const data = {
      email: email,
      phoneNumber: phoneNumber,
      password: password
    };

    let res = await signUp.signUp(data);
    window.localStorage.setItem("token", res.currentUser.token);
    window.location.href = "http://localhost:3001/dashboard";
  };

  render() {
    return (
      <div className="sign-form">
        <TextField
          placeholder="Email"
          required={true}
          onChange={event => this.handleChange(event, "email")}
        />
        <TextField
          placeholder="Phone number"
          required={true}
          onChange={event => this.handleChange(event, "phoneNumber")}
        />
        <TextField
          placeholder="Password"
          required={true}
          onChange={event => this.handleChange(event, "password")}
        />
        <div className="btns">
          <Button
            onClick={() => this.handleSubmit()}
            size="medium"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
        <form />
      </div>
    );
  }
}
