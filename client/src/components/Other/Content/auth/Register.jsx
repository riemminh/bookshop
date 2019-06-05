import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../../../common/InputGroup";
import SelectListGroup from "../../../common/SelectListGroup";
import DatePicker from "react-datepicker";
import { registerUser } from "../../../../actions/authActions";
import moment from "moment";

const action = {
  registerUser
};

const mapState = state => ({
  errors: state.errors
});

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
  componentWillReceiveProps(nextProps) {
    if (this.state.errors !== nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnChangeDatePicker = date => {
    this.setState({
      birthday: date
    });
  };
  handleSubmitRegister = e => {
    e.preventDefault();
    let convertDay = "";
    if (this.state.birthday) {
      convertDay = moment(this.state.birthday).format("YYYY/MM/DD");
    }
    const userData = {
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1,
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      birthday: convertDay,
      sex: this.state.sex
    };
    this.props.registerUser(userData, this.props.history);
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
        <form onSubmit={this.handleSubmitRegister} id="form-validate">
          <div className="col-lg-12 col-md-12 col-sm-12 form-content">
            {/* back-home */}
            <div className="back-link">
              <small>« </small>
              <button
                onClick={e => {
                  e.preventDefault();
                  this.props.history.goBack();
                }}
                href=""
              >
                Quay lại
              </button>
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
                      type="password"
                      value={this.state.password}
                      error={errors.password}
                      onChange={this.handleOnchange}
                    />
                  </li>
                  <li>
                    <InputGroup
                      name="password1"
                      type="password"
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
                        <DatePicker
                          selected={this.state.birthday}
                          openToDate={new Date("1970/01/01")}
                          onChange={this.handleOnChangeDatePicker}
                          placeholderText="DD/MM/YYYY"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      </div>
                      {errors.birthday && (
                        <div className="validation-advice">
                          {errors.birthday}
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-2 col-sm-12 btn-div">
              <button type="submit" title="Gởi đi" className="button">
                <span>Gửi thông tin</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Register);
