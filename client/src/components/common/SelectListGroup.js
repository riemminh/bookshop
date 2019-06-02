import React from "react";

const SelectListGroup = ({ name, value, error, onChange, options }) => {
  const selectOption = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        {selectOption}
      </select>
    </div>
  );
};

export default SelectListGroup;
