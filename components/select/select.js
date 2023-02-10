import { forwardRef } from "react";
import { Label } from "pages/create/create.styles";

export const Select = forwardRef(function SelectWithRef(
  { options, name, id, onChange, label, error, ...props },
  ref
) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <select name={name} id={id} onChange={onChange} {...props} ref={ref}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
    </>
  );
});
