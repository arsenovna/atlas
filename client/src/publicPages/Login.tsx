import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <label>Email</label>
          <Input fullWidth={true} margin="dense" />
          <label>Password</label>
          <Input fullWidth={true} margin="dense" />
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
