import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="headerAdmin">
        <div className="logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
          </Link>
        </div>
        <div className="btnToggle">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/icon_btn.svg"}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Header;
