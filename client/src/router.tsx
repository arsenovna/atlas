import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./publicPages/Login";
import SignUp from "./publicPages/SignUp";
import Menu from "./components/Menu";
import Dashboard from "./pages/dashboard/Dashboard";
import { History } from "history";

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
          {token && <Menu />}
          <Route path="/login" component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};
export default AppRoutes;
