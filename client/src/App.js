import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import store from "./store";
import Header from "./components/Header/Header";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import AdminContent from "./components/Admin/Content/Content";

class App extends Component {
  render() {
    const Admin = () => (
      <div className="admin">
        <AdminHeader />
        <AdminContent />
      </div>
    );
    const Other = () => (
      <div>
        <Header />
      </div>
    );
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Other} />
            <Route path="/admin" exact component={Admin} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
