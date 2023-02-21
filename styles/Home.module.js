import styled from "@emotion/styled";

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  font: 400 16px "Share Tech Mono";
`;

export const TitleContainer = styled.div`
  @media (max-width: 600px) {
    height: 200px;
    padding-top: 20px;
  }
  margin-top: 133px;
  width: 446px;
  height: 391px;
  border: 1px solid rgba(255, 255, 255, 20%);
  background: rgba(255, 255, 255, 6%);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

export const Title = styled.span`
  @media (max-width: 600px) {
    font-size: 20px;
  }
  color: #b1b1b1;
  font-size: 50px;
  line-height: 150%;
  letter-spacing: 22px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  align-self: center;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 700px;
  overflow: hidden;
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 200px 0 100px 50px;
  align-items: flex-start;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  padding-right: 50px;
  justify-content: flex-end;
  gap: 20px;
  align-self: flex-start;
  margin-bottom: 80px;
`;

export const Button = styled.a`
  right: 0;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid white;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  animation: fill-background 0.3s ease-in-out forwards;

  &:hover {
    background-color: white;
    color: black;

    img {
      filter: invert(100%) grayscale(100%);
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 80px;
>>>>>>> 5945443 (Connect home page with backend and amend styles)
`;
