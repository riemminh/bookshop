import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Main/Dashboard";
import Profile from "./Main/Profile";
import User from "./Main/User";

class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="adminContent">
          <Sidebar />
          <div className="main">
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/profile" component={Profile} />
            <Route path="/admin/user" component={User} />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
