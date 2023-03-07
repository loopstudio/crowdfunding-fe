import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  position: absolute;
  right: 70px;
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
      background-color: rgba(255, 255, 255, 0.19);
    }
  }
`;

export const Arrow = styled.div`
  font-size: 24px;
  opacity: ${({ isInactive }) => isInactive && "0.7"};
  cursor: ${({ isInactive }) => (isInactive ? "not-allowed" : "pointer")};
`;

export const PageNumber = styled.div`
  background-color: ${({ isActive }) =>
    isActive && "rgba(255, 255, 255, 0.19)"};
  color: white;
  cursor: pointer;
`;
