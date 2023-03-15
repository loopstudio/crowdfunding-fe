import { useState } from "react";

import {
  Label,
  SliderInput,
  SliderValuesContainer,
  SliderValues,
} from "./slider.styles";

export const Slider = ({ max, min }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <Label htmlFor="slider">Project Goal</Label>

      <SliderInput
        name="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <SliderValuesContainer>
        <SliderValues>${min}</SliderValues>
        <SliderValues>${max}</SliderValues>
      </SliderValuesContainer>
    </div>
  );
};
