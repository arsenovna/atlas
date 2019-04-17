import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./publicPages/Login";
import SignUp from "./publicPages/SignUp";
import Menu from "./components/Menu";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Products from "./pages/products/Products";
import Agents from "./pages/agents/Agents";
import Reports from "./pages/reports/FinReports";

import { History } from "history";
import FinReports from "./pages/reports/FinReports";

let token = window.localStorage.getItem("token");

interface Props {
  history: History;
}

interface Adress {
  street: string;
  city: string;
  country: string;
}

interface Human {
  age: number;
  name: string;
  surname: string;
  address?: Adress;
  phoneNumber?: number;
}

// people: Human[]  --- people ia an array of objects as Human interface

const AppRoutes = ({ history }: Props) => {
  function countHuman(people: any) {
    people.map((i: Human) => i);
  }
  return (
    <main className="page_wrapper">
      <Router history={history}>
        <>
          {token && <Menu />}
          <div className="main-container">
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  token ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/products" component={Products} />
              <Route path="/agents" component={Agents} />
              <Route path="/reports" component={FinReports} />
            </Switch>
          </div>
        </>
      </Router>
    </main>
  );
};
export default AppRoutes;
