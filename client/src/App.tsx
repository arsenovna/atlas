import React, { Component } from "react";
import "./App.css";
// import Menu from "./pages/Menu";
// import Login from "./publicPages/Login";
// import SignUp from "./publicPages/SignUp";
import Router from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          {/* <Menu /> */}
          {/* <Login /> */}
          {/* <SignUp /> */}
          <Router />
          <div className="content">
            <h2>Content HERE</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
