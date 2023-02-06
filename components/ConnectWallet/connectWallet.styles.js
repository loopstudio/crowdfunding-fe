import styled from "@emotion/styled";

export const Button = styled.button`
  background: white;
  border-radius: 5px;
  border: none;
  height: 42px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  color: black;
  padding: 10px;
  :disabled {
    background: grey;
    color: black;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
