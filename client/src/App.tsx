import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./pages/Menu";
// import Login from "./publicPages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
