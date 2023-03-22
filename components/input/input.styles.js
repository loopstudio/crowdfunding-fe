import styled from "@emotion/styled";

const calculateBorderColor = (state, isFocus) => {
  if (state === "error") return "#E74A3B";
  if (state === "valid") return "#3CBC81";
  return isFocus ? "white" : "#ffffff99";
};

export const StyledInput = styled.input`
  display: block;
  border: 1px solid;
  border-color: ${({ state }) => calculateBorderColor(state)};
  color: white;
  background-color: transparent;
  height: 40px;
  padding: 8px 12px;
  padding-left: ${({ isSearch }) => isSearch && "40px"};
  font-family: NTR;
  font-size: 16px;
  line-height: 150%;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    color: #ffffff99;
  }

  :focus {
    outline: none;
    border: 1px solid;
    border-color: ${({ state }) => calculateBorderColor(state)};
  }
  ::placeholder {
    color: #ffffff99;
  }
`;

export const Message = styled.p`
  color: ${({ state }) => calculateBorderColor(state)};
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Wrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    right: ${({ isSearch }) => (isSearch ? "0" : "10px")};
    top: ${({ isSearch }) => (isSearch ? "10px" : "10px")};
    left: ${({ isSearch }) => isSearch && "10px"};
  }
`;

export const Label = styled.label``;
