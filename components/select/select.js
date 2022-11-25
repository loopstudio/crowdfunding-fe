import React from "react";
import { Label } from "../../pages/create/create.styles";

const Select = ({ options, name, id, onChange, register, label, error }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <select name={name} id={id} onChange={onChange} {...register(name)}>
        <option key="select" value="" disabled selected="selected">
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
    </>
  );
};

export default Select;
