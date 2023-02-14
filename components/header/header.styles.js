import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 12px 18px 12px 18px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(30, 30, 30);
  border-bottom: .1px solid #FFFFFF;
  align-items: center;
`;

export const HeaderText = styled.p`
  @media (max-width: 600px) {
    font-size: 12px;
  }
  font: 400 16px 'Share Tech Mono';
  color: #D0D0D0;
  margin: 0 6px 0 6px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;