import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Admin from "./test/admin/Admin";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/admin"
          render={() => (
            <div>
              <Header />
              <Route path="/admin" component={Admin} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
