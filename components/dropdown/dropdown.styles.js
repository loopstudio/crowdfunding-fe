import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-top: 5px;
`;

export const DropdownButton = styled.button`
  font-family: Share Tech Mono;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  border: 1px solid #ffffff99;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  font-family: NTR;

  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const Label = styled.label`
  font-family: NTR;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    right: 10px;
    top: 8px;
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
    transition: transform 0.3s ease-in-out;
  }
`;

export const Skeleton = styled.div`
  border: 1px solid #ffffff99;
  height: 40px;
  width: 100%;

  background-color: #eee;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
