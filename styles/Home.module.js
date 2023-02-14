import styled from "@emotion/styled";

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  @media (max-width: 600px) {
    height: 200px;
    padding-top: 20px;
  }
  margin-left: 0;
  margin-top: 133px;
  padding-top: 100px;
  width: 50%;
  height: 391px;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
`;

export const Title = styled.p`
  @media (max-width: 600px) {
    font-size: 20px;
  }
  color: #B1B1B1;
  margin: 30px 0 0 60px;
  font: 400 50px 'Share Tech Mono';
`;

export const LogoContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 70px;
    height: 400px;
    width: 350px;
  }
  position: absolute;
  align-self: center;
  margin-top: 130px;
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 661px;
  height: 580px;
  overflow: hidden;
`;

export const Grid = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 200px 0 100px 50px;
  align-items: flex-start;
  justify-content: center;
`;

export const GridTitles = styled.p`
  font: 400 16px 'Share Tech Mono';
  color: #FFFFFF;
  margin: 31px 0 39px 0;
`;

export const GridButtonsContainer = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  flex-direction: row;
  display: flex;
  width: 100%;
  padding-right: 35px;
  justify-content: space-between;
`;

export const BoxSearch = styled.input`
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
  width: 388px;
  margin-right: 36px;
  background-color: #646464;
  border: 1px solid white;
  font: 400 16px 'share-tech-mono';
  padding: 12px;
`;

export const BoxProject = styled.a`
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
  right: 0;
  background-color: #646464;
  border: 1px solid white;
  font: 400 16px 'share-tech-mono';
  padding: 12px;
`;

export const BoxFilter = styled.input`
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
  background-color: #646464;
  border: 1px solid white;
  font: 400 16px 'share-tech-mono';
  padding: 12px;
`;

export const ProjectContainer = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  width: 100%;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
}
`;
