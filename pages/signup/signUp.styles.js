import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  text-align: start;
`;

export const Title = styled.h1`
  color: black;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid black;
  color: black;
  background-color: white;
  height: 42px;
  padding: 12px 128px 12px 13px;

  :focus {
    outline: none;
  }
`;

export const Label = styled.label`
  color: black;
  font-weight: bold;
`;

export const Button = styled.button`
  background: black;
  border-radius: 5px;
  border: none;
  height: 42px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  :disabled {
    background: grey;
    color: white;
    cursor: not-allowed;
  }
`;
