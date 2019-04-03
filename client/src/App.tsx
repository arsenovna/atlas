import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Router from "./router";

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

let token = window.localStorage.getItem("authentication_token");

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          {token && <Menu />}
          <div className="content">
            <Router history={history}/>
          </div>
        </div>
      </div>
    );
  }
}
