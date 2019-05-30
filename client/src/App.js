import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Other/Header/Header";
import Admin from "./components/Admin/Admin";
import Other from "./test/other/Other";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/admin"
          render={() => (
            <div>
              <Route path="/admin" component={Admin} />
            </div>
          )}
        />
        <Route
          path="/"
          render={() => (
            <div>
              <Header />
              <Route path="/" component={Other} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
