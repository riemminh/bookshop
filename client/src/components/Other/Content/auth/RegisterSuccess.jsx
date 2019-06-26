import React, { Component } from "react";
import WOW from "wowjs";
class RegisterSuccess extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <div className=" wow fadeIn">
        <div className="account-create">
          <div className="col-lg-12">
            <div className="register-success">
              <h1>Chúc mừng bạn đăng ký thành công.!!!</h1>
              <button onClick={() => this.props.history.push("/login")}>
                Click để đến trang đăng nhập.
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSuccess;
