import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Other/Header/Header";
import Admin from "./components/Admin/Admin";
import Other from "./components/Other/Other";
import Footer from "./components/Other/Footer/Footer";
import LoginModal from "./components/common/Modal/LoginModal";
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
              <LoginModal />
              <Header path={this.props} />
              <Other />
              <Footer />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
