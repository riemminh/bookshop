import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import User from "./User";

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <Sidebar />
        <div className="main">
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/profile" component={Profile} />
          <Route path="/admin/user" component={User} />
        </div>
      </div>
    );
  }
}

export default Admin;
