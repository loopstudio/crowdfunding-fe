import styled from "@emotion/styled";

export const SliderInput = styled.input`
  -webkit-appearance: none;
  margin: 0;
  margin-top: 5px;
  height: 7px;
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    #f08548 2.44%,
    rgba(151, 71, 255, 0.96) 80.08%
  );
  background-size: ${({ value, max, min }) =>
      `${((value - min) * 100) / (max - min)}%`}
    100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export const SliderValuesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SliderValues = styled.span`
  font-family: NTR;
  font-size: 16px;
  line-height: 150%;
`;

export const Label = styled.label`
  font-family: NTR;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
  margin-top: 40px;
`;
