import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../../actions/authActions";
import WOW from "wowjs";

const action = { loginUser };

const mapState = state => ({
  errors: state.errors
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.errors !== nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container-inner  wow fadeIn">
          <div className="account-login">
            <div className="formblockwbg">
              <form onSubmit={this.handleSubmit} id="login-form">
                <div className="">
                  <div className="col-md-4 col-sm-8 col-xs-12 form-edit-center login-form">
                    <p>Welcome to Fahasa</p>

                    <div className="page-title">
                      <h1>Đăng nhập</h1>
                    </div>
                    <div className="form-group">
                      <div className="form-list">
                        <div className="input-box">
                          <label htmlFor="">
                            <em>*</em>Email
                          </label>
                          <input
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            type="text"
                          />
                        </div>
                        {errors.email && (
                          <div className="validation-advice">
                            {errors.email}
                          </div>
                        )}
                        <div className="input-box">
                          <label htmlFor="">
                            <em>*</em>Mật khẩu
                          </label>
                          <input
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                          />
                        </div>
                        {errors.password && (
                          <div className="validation-advice">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* btn */}
                    <div className="block-button">
                      <button
                        type="submit"
                        className="button-dn"
                        title="Đăng nhập"
                        name="send"
                        id="send2"
                      >
                        <span>Đăng nhập</span>
                      </button>
                      <br />
                      <Link to="forgotpassword" className="button-rp">
                        Quên mật khẩu?
                      </Link>
                      <div className="create-acc">
                        <Link to="/register" className="button">
                          <span>Tạo tài khoản</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
)(Login);
