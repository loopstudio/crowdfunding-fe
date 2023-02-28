import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  position: absolute;
  right: 20px;
  bottom: 20px;

  div {
    width: 33px;
    height: 33px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    :hover {
      background-color: white;
      color: black;
    }
  }
`;

export const Arrow = styled.div`
  font-size: 24px;
  background-color: #ffffff0f;
  opacity: ${({ isInactive }) => isInactive && "0.7"};
  cursor: ${({ isInactive }) => (isInactive ? "not-allowed" : "pointer")};
`;

export const PageNumber = styled.div`
  background-color: ${({ isActive }) => (isActive ? "white" : "#ffffff0f")};
  color: ${({ isActive }) => (isActive ? "black" : "#bdbdbd")};
  cursor: pointer;
`;
