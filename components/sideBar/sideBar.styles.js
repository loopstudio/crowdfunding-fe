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

export const Subtitle = styled.span`
  font-size: 14px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  :hover:before {
    visibility: visible;
    width: 100%;
  }
`;
