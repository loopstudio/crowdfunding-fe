import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 40px;
  left: 0px;
  width: 250px;
  border-right: .1px solid #FFFFFF;
  height: 100maxh;
  background-color: rgba(30, 30, 30);
  flex-direction: column;
`;

export const Title = styled.h1`
  font: 400 24px 'Share Tech Mono';
  margin-top: 40px;
`;

export const Subtitle = styled.a`
  font: 400 14px 'Share Tech Mono';
  margin-top: 15px;
`;

export const SideBarButtonContainer = styled.div`
  display: flex;
  margin-top: 40vh;
`;

export const Button = styled.a`
  display: flex;
  height: 40px;
  font: 400 16px 'Share Tech Mono';
  padding: 10px;
  border: 0.5px solid #FFFFFF;
  background-color: rgba(255, 255, 255, 0.06);
`;