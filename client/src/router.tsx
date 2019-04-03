import React from "react";
import {
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./publicPages/Login";
import SignUp from "./publicPages/SignUp";
import Menu from "./components/Menu";
import Dashboard from "./pages/dashboard/Dashboard";
import { History } from 'history';

let token = window.localStorage.getItem("authentication_token");

interface Props {
  history: History;
}

const AppRoutes = ({ history }: Props) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
            }
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />

        </Switch>
      </Router>
    </>
  )
}
export default AppRoutes;