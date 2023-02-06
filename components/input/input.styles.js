import styled from "@emotion/styled";

export const StyledInput = styled.input`
  display: block;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ error }) => (error ? "red" : "black")};
  color: black;
  background-color: white;
  height: 42px;
  padding: 12px;
  :focus {
    outline: none;
  }
`;
