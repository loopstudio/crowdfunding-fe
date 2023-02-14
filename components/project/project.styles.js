import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
  @media (max-width: 600px) {
    margin: 0 0 50px 0;
  }
  background-color: #1b1b1b;
  margin: 0 42px 50px 0;
  border: 1px solid white;
  z-index: 0
`;

export const Button = styled.input`
  background-color: white;
  font: 400 14px "share-tech-mono";
  color: black;
  width: 100%;
  height: 37px;
`;

export const Text = styled.p`
  font: 400 14px "share-tech-mono";
  color: white;
  margin: 15px 0 0 0;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 170px;
  padding: 0 19px 0px 13px;
  justify-content: space-between;
`;