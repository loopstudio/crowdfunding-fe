import styled from "@emotion/styled";
import Image from "next/image";

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

export const PlanetGIF = styled(Image)`
  mix-blend-mode: screen;
  position: absolute;
  right: 20%;

`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 200px 0 100px 50px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const ButtonsContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  padding-right: 50px;
  justify-content: flex-end;
  gap: 20px;
  align-self: flex-start;

  input {
    width: 340px;
  }
`;

export const Button = styled.a`
  right: 0;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid #ffffff99;
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
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  margin: 0 auto 0 35px;

  div {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const TextWrapper = styled.div`
  white-space: nowrap;
`;

export const PaginationContainer = styled.div`
  > div {
    bottom: 20px;
    right: 10px;
  }
`;
