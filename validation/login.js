const isEmpty = require("./is-empty");
const validator = require("validator");

const ValidateLoginInput = data => {
  let errors = {};
  data.email = data.email ? data.email : "";
  data.password = data.password ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Vui lòng nhập email chính xác. Ví dụ: yourname@domain.com";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Thông tin này quan trọng.Vui lòng không để trống.";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Thông tin này quan trọng.Vui lòng không để trống.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = ValidateLoginInput;
