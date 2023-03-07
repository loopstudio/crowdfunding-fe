import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 12px 34px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AppName = styled.p`
  font: 400 16px "Share Tech Mono";
  color: #d0d0d0;
  margin: 0 6px 0 6px;
  letter-spacing: 0.5px;
`;

export const HeaderText = styled.p`
  @media (max-width: 600px) {
    font-size: 12px;
  }
  font: 400 16px "Share Tech Mono";
  color: #d0d0d0;
  margin: 0 6px 0 6px;
  letter-spacing: 0.5px;
  border-bottom: ${({ isDropdownOpen }) => isDropdownOpen && "1px solid white"};

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
    visibility: ${({ isDropdownOpen }) => !isDropdownOpen && "visible"};
    width: 100%;
  }
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
export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #ddd;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  top: 60px;
  right: 70px;
  padding: 18px;
  gap: 8px;

  a {
    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 7px;
      background-color: #fff;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }

    :hover:before {
      visibility: visible;
      width: 90%;
    }
  }
`;
