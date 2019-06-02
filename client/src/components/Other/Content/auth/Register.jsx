import React, { Component } from "react";
import InputGroup from "../../../common/InputGroup";
import SelectListGroup from "../../../common/SelectListGroup";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password1: "",
    lastname: "",
    firstname: "",
    birthday: "",
    sex: "",
    errors: {}
  };

  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    const options = [
      { label: "", value: "" },
      { label: "Nam", value: "Nam" },
      { label: "Nữ", value: "Nữ" }
    ];
    return (
      <div className="account-create">
        {/* banner */}
        <div className="container-inner">
          <div className="col-lg-12 col-md-12 col-sm-12 banner-customer-account-create">
            <p>
              <a>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/Banner-F-point-1920x300.jpg"
                  }
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
        {/* form */}
        <form action="" id="form-validate">
          <div className="col-lg-12 col-md-12 col-sm-12 form-content">
            {/* back-home */}
            <div className="back-link">
              <small>« </small>
              <a href="">Quay lại</a>
            </div>
            {/* page-title */}
            <div className="page-title">
              <h1>Tạo tài khoản</h1>
            </div>

            <div className="row">
              {/* form-left */}
              <div className="col-lg-3 col-md-3 col-sm-6 offset-md-3 offset-lg-3">
                <ul className="form-list">
                  <li>
                    <InputGroup
                      name="email"
                      placeholder="Địa chỉ Email*"
                      value={this.state.email}
                      error={errors.email}
                      onChange={this.handleOnchange}
                    />
                  </li>
                  <li>
                    <InputGroup
                      name="password"
                      placeholder="Mật khẩu*"
                      value={this.state.password}
                      error={errors.password}
                      onChange={this.handleOnchange}
                    />
                  </li>
                  <li>
                    <InputGroup
                      name="password1"
                      placeholder="Xác nhận mật khẩu*"
                      value={this.state.password1}
                      error={errors.password1}
                      onChange={this.handleOnchange}
                    />
                  </li>
                  <li>
                    <div className="input-box">
                      <div className="custom-title-input">Giới tính</div>
                      <div className="input-box dropdownfhs">
                        <SelectListGroup
                          name="sex"
                          value={this.state.sex}
                          options={options}
                          onChange={this.handleOnchange}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* form-right */}
              <div className="col-lg-3 col-md-3 col-sm-6">
                <ul className="form-list">
                  <li>
                    <div className="input-box">
                      <InputGroup
                        name="firstname"
                        placeholder="Tên*"
                        value={this.state.firstname}
                        error={errors.firstname}
                        onChange={this.handleOnchange}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="input-box">
                      <InputGroup
                        name="lastname"
                        placeholder="Họ*"
                        value={this.state.lastname}
                        error={errors.lastname}
                        onChange={this.handleOnchange}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="input-box">
                      <div className="custom-title-input">Ngày Sinh</div>
                      <div className="dropdownfhs input-birthday">
                        <InputGroup
                          name="birthday"
                          placeholder="DD/MM/YY"
                          value={this.state.birthday}
                          error={errors.birthday}
                          onChange={this.handleOnchange}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-2 col-sm-12 btn-div">
              <button type="submit" title="Gởi đi" class="button">
                <span>Gửi thông tin</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
