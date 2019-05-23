import React, { Component } from "react";
import Megamenu from "./megamenu/Megamenu";

export default class MenuTop extends Component {
  render() {
    return (
      <div className="menu-top">
        <div className="row">
          {/* category */}
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12  hidden-xs hidden-sm">
            {/* block-danh-muc */}
            <div
              className="block block-success ves-verticalmenu highlighted hidden-xs hidden-sm offcanvas-actived"
              id="ves-verticalmenu"
            >
              <div className="block-title hidden-xs hidden-sm">
                <span>Danh Mục</span>
              </div>
            </div>
            {/* block-content */}
            <Megamenu />
          </div>
          {/* ve-mainnav */}
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div id="ves-mainnav">
              <div className="ves-megamenu offcanvas-actived">
                <div className="navbar navbar-inverse">
                  <div
                    id="mainmenutop"
                    className="megamenu offset-canvas-menu-play"
                  >
                    <div className="navbar">
                      <ul className="nav navbar-nav megamenu">
                        <li>
                          <a href="">
                            <span className="menu-title">Daily Deals</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="menu-title">
                              FAHASA Book Award
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="menu-title">F-Blog</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ve-mainnav */}
        </div>
      </div>
    );
  }
}
