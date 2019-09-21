import React from "react";

const getUnique = (items, name) => {
  return [...new Set(items.map(item => item[name]))];
};
const renderOptions = (items, name) => {
  let options = getUnique(items, name);
  options = ["all", ...options];
  // map to jsx
  options = options.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return options;
};

const Select = ({ items, label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-capitalize">
        {label}
      </label>
      <select
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {renderOptions(items, name)}
      </select>
    </div>
  );
};

export default Select;
