import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 header-left hidden-xs">
            <div className="pull-left">
              <div className="nav-links">
                <li>
                  <span className="email infor">info@fahasa.com</span>
                </li>
                <li>
                  <span className="phone infor">
                    <span />
                    1900636467
                  </span>
                </li>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 header-right">
            {/* list-menu-account */}
            <div className="pull-right">
              <div className="header-link-right header-link">
                <ul className="nav-links">
                  <li className="first">
                    <a href="" title="Tạo tài khoản">
                      Tạo tài khoản
                    </a>{" "}
                  </li>
                  <li>
                    <a title="Tài khoản">Tài khoản</a>{" "}
                  </li>
                  <li>
                    <a href="" title="Đăng nhập">
                      Đăng nhập
                    </a>{" "}
                  </li>
                  <li className=" last">
                    <a href="" title="Blog">
                      Blog
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* Language */}
            <div className="pull-right lang hidden-xs hidden-sm">
              <div className="header-link-right header-link">
                <div className="form-language">
                  <ul className="langs-wrapper nav-links">
                    <li className="lang-flag-container">
                      <img
                        src={process.env.PUBLIC_URL + "assets/img/default.png"}
                        className="lang-flag-img"
                        lang="default"
                        alt=""
                      />
                    </li>
                    <li className="lang-flag-container">
                      <img
                        src={process.env.PUBLIC_URL + "assets/img/english.png"}
                        className="lang-flag-img"
                        lang="english"
                        alt=""
                      />
                    </li>
                    <li className="lang-flag-container">
                      <img
                        src={process.env.PUBLIC_URL + "assets/img/japan.png"}
                        className="lang-flag-img"
                        lang="japan"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopBar;
