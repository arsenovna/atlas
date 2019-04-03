import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <form>
            <Input  placeholder="Email"  fullWidth={true} />
            <Input placeholder="Password" fullWidth={true} />
            <div className="btns">
              <Button color="primary" size="small" variant="outlined">
                Save
            </Button>
              <span className="or">or</span>
              <Button color="primary" size="small" variant="raised">
                Sign Up
            </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
