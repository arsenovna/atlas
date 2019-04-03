import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./publicPages/Login";
import SignUp from "./publicPages/SignUp";
import Menu from "./components/Menu";
import Dashboard from "./pages/dashboard/Dashboard";

let token = window.localStorage.getItem("authentication_token");

// interface Props {
//   history: any;
// }
const AppRoutes = () => (
  <>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
          }
        />
        {token && <Menu />}

        <Route path="/login" component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  </>
);
export default AppRoutes;
