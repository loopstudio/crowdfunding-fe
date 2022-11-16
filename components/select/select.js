import React from "react";

const Select = ({ options, name, id, onChange }) => {
  return (
    <select name={name} id={id} onChange={onChange} defaultValue="select">
      <option key="select" value="select" disabled>
        Select...
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
