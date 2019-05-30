import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/admin/dashboard">Dashbord</NavLink>
          </li>
          <li>
            <NavLink to="/admin/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/admin/user">User</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
