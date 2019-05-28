import React, { Component } from "react";

class AdminHeader extends Component {
  render() {
    return (
      <header className="app-header navbar">
        <a className="navbar-brand" href="#">
          <img
            className="navbar-brand-full"
            src={process.env.PUBLIC_URL + "assets/img/logo.svg"}
            width="89"
            height="25"
            alt="CoreUI Logo"
          />
        </a>
        <button
          className="navbar-toggler sidebar-toggler d-md-down-none"
          type="button"
          data-toggle="sidebar-lg-show"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Users
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default AdminHeader;
