import React, { Component } from "react";
import BannerTop from "./BannerTop";
import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import MenuTop from "./MenuTop";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <BannerTop />
        <div className="container">
          <TopBar />
          <MiddleBar />
          <MenuTop />
        </div>
      </div>
    );
  }
}

export default Header;
