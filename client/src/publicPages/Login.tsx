import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import { AuthService } from "../services/authorization";

const login = new AuthService();

export default class Login extends Component<any, any> {
  state = {
    email: "",
    password: ""
  };
  handleChange = (event: any, field: any) => {
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = async () => {
    const data = {
      email: "nusenkanova@gmail",
      password: "kkk888kkk"
    };
    let response = await login.signIn(data);
    window.localStorage.setItem("token", response.currentUser.token);
    window.location.href = "http://localhost:3001/dashboard";
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <form>
            <TextField
              onChange={event => this.handleChange(event, "email")}
              placeholder="Email"
              fullWidth={true}
            />
            <TextField
              type="password"
              onChange={event => this.handleChange(event, "password")}
              placeholder="Password"
              fullWidth={true}
            />
            <div className="btns">
              <Button
                onClick={() => this.handleSubmit()}
                color="primary"
                size="small"
                variant="outlined"
              >
                Login
              </Button>
              <span className="or">or</span>
              <Button
                href="/signup"
                color="primary"
                size="small"
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
