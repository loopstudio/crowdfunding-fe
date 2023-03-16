import { useState, forwardRef } from "react";

import {
  Label,
  SliderInput,
  SliderValuesContainer,
  SliderValues,
} from "./slider.styles";

export const Slider = forwardRef(function SliderWithRef(
  { min, max, label, handleChange, name, ...props },
  ref
) {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(Number(e.target.value));
    handleChange(e);
  };

  return (
    <div>
      <Label htmlFor="slider">{label}</Label>

      <SliderInput
        id="slider"
        type="range"
        name={name}
        ref={ref}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        {...props}
      />
      <SliderValuesContainer>
        <SliderValues>${min}</SliderValues>
        <SliderValues>${max}</SliderValues>
      </SliderValuesContainer>
    </div>
  );
});
