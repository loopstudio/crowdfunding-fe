import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 12px 18px 12px 18px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  border-bottom: 0.1px solid #ffffff;
  align-items: center;
`;

export const HeaderText = styled.p`
  @media (max-width: 600px) {
    font-size: 12px;
  }
  font: 400 16px 'Share Tech Mono';
  color: #d0d0d0;
  margin: 0 10px 0 10px;

  text-decoration: ${(props) =>
    props.hover ? 'underline 0.15em transparent' : null};
  transition: text-decoration-color 300ms;

  :hover {
    text-decoration-color: #d0d0d0;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
