import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./pages/Menu";
// import Login from "./publicPages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Menu/>
          {/* <Login /> */}
          <div className="content">
            <h2>Content HERE</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
