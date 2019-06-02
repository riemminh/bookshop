import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./Content/auth/Register";
import Home from "./Content/home/Home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
