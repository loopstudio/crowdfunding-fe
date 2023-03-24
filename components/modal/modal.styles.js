import styled from "@emotion/styled";

export const Question = styled.h4`
  margin: 0;
  font-size: 18px;
`;

export const Description = styled.p`
  margin: 0;
  font-family: NTR;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.1px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-self: flex-end;
  button {
    margin: 0;
  }
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    margin: 0 0 10px 33px;
  }
`;

export const ToastTitle = styled.div`
  display: flex;
  align-items: center;
`;
