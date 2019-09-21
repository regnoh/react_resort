import React from "react";

const Range = ({ label, name, value, min, max, onChange }) => {
  return (
    <div className="form-group">
      <label className="text-capitalize" htmlFor={name}>
        {label} ${value}
      </label>
      <input
        type="range"
        className="form-control"
        id={name}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
};

export default Range;
