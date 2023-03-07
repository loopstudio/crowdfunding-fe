import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 70px 40px 40px;
  left: 0px;
  min-height: 100vh;
  background-color: #ffffff0f;
  flex-direction: column;
  gap: 18px;
  white-space: nowrap;
`;

export const Title = styled.span`
  font-size: 24px;
`;

export const Subtitle = styled.a`
  font-size: 14px;
`;
