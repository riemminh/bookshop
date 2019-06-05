import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutUser } from "../../../actions/authActions";

const action = { logOutUser };

const mapState = state => ({
  auth: state.auth
});

class TopBar extends Component {
  render() {
    const ListLogOut = (
      <div className="pull-right">
        <div className="header-link-right header-link">
          <ul className="nav-links">
            <li className="first">
              <NavLink to="/register">Tạo tài khoản</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/login">Tài khoản</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/login">Đăng nhập</NavLink>{" "}
            </li>
            <li className=" last">
              <NavLink to="/blog">Blog</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
    const ListLogIn = (
      <div className="pull-right">
        <div className="header-link-right header-link">
          <ul className="nav-links">
            <li>
              <NavLink to="/login">Tài khoản</NavLink>{" "}
            </li>
            <li>
              <NavLink onClick={() => this.props.logOutUser()} to="/login">
                Thoát
              </NavLink>{" "}
            </li>
            <li className=" last">
              <NavLink to="/blog">Blog</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
    const { auth } = this.props;
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

            {auth && auth.isAuthenticated ? ListLogIn : ListLogOut}
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
export default connect(
  mapState,
  action
)(TopBar);
