import styled from "@emotion/styled";

const calculateGap = (numOfErrors) => {
  if (numOfErrors === 1) return "54px";
  if (numOfErrors === 2) return "30px";

  return "80px";
};

export const Form = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  text-align: start;
  max-height: 420px;
  position: relative;
  justify-content: space-between;
  margin-top: 80px;
  gap: ${({ numOfErrors }) => calculateGap(numOfErrors)};

  button {
    margin-top: 0px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;

  input {
    width: 100%;
  }
`;
