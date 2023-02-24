import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 12px 34px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.p`
  @media (max-width: 600px) {
    font-size: 12px;
  }
  font: 400 16px "Share Tech Mono";
  color: #d0d0d0;
  margin: 0 6px 0 6px;
  letter-spacing: 0.5px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LogOutButton = styled.button`
  all: unset;
  cursor: pointer;
  color: #d0d0d0;
`;
