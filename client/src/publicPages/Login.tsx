import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <form>
          <InputLabel>Email</InputLabel>
          <Input fullWidth={true} />
          <InputLabel>Password</InputLabel>
          <Input fullWidth={true} />
          <div className="btns">
            <Button size="small" variant="outlined">
              Save
            </Button>
            <span className="or">or</span>
            <Button size="small" variant="outlined">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
