import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-form">
        <InputLabel>First Name</InputLabel>
        <Input />
        <InputLabel>Last Name</InputLabel>
        <Input />
        <InputLabel>Address</InputLabel>
        <Input />
        <InputLabel>Phone number</InputLabel>
        <Input />
        <div className="btns">
          <Button size="medium" variant="outlined">
            Submit
          </Button>
        </div>
        <form />
      </div>
    );
  }
}
