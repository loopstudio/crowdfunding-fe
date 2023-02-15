import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideBarContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 40px;
  left: 0px;
  width: 300px;
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

export const Content = styled.div`
  @media (max-width: 600px) {
    padding: 38px 40px 50px 40px;
  }
  display: flex;
  flex-direction: column;
  padding: 38px 78px 50px 78px;
  width: 100%;
`;

export const ProjectsContainer = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
`;

export const NewProject = styled.a`
  display: flex;
  height: 300px;
  width: 243px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px dashed #FFFFFF;
  background-color: #1B1B1B;
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

export const Search = styled.input`
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 15px;
  }
  width: 388px;
  margin-right: 36px;
  border: 0.5px solid #FFFFFF;
  font: 400 16px 'Share Tech Mono';
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.06);
`;

export const SearchContainer = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
`;
