import React, { Component } from "react";

class RegisterSuccess extends Component {
  render() {
    return (
      <div>
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
