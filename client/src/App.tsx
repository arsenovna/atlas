import React, { Component } from "react";
import "./App.css";
import Router from "./router";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history} />
      </div>
    );
  }
  // return (
  //   <div className="App">
  //     <div className="main-container">
  //       {!token && <Menu />}
  //       <div className="content">
  //         <Router history={history} />
  //       </div>
  //     </div>
  //   </div>
  // );
}
