const isEmpty = require("./is-empty");
const validator = require("validator");

const ValidateRegisterInput = data => {
  let errors = {};
  data.email = data.email ? data.email : "";
  data.password = data.password ? data.password : "";
  data.lastname = data.lastname ? data.lastname : "";
  data.firstname = data.firstname ? data.firstname : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Vui lòng nhập email chính xác. Ví dụ: yourname@domain.com";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (!validator.isLength(data.password, { min: 6 })) {
    errors.password =
      "Please enter 6 or more characters. Leading or trailing spaces will be ignored.";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (validator.isEmpty(data.password1)) {
    errors.password1 = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (!validator.equals(data.password, data.password1)) {
    errors.password1 = "Mật khẩu không khớp.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = ValidateRegisterInput;
