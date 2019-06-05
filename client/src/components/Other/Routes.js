import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./Content/auth/Register";
import RegisterSuccess from "./Content/auth/RegisterSuccess";
import PrivateRoute from "../common/PrivateRoute";
import Login from "./Content/auth/Login";
import Home from "./Content/home/Home";
import Profile from "./Content/profile/Profile";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/registersuccess" component={RegisterSuccess} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
