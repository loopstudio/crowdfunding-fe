import React from "react";

const Select = ({ options, name, id }) => {
  return (
    <select name={name} id={id}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
