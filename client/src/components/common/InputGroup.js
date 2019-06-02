import React from "react";

const InputGroup = ({ name, placeholder, value, error, type, onChange }) => {
  return (
    <div>
      <div className="input-box">
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          className="input-text validate-email required-entry"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
