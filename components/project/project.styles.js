import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
  @media (max-width: 600px) {
    margin: 0 0 50px 0;
  }
  background-color: #1b1b1b;
  margin: 0 42px 50px 0;
  border: 1px solid white;
  z-index: 0;
`;

export const Button = styled.a`
  background-color: white;
  font: 400 14px "Share Tech Mono";
  color: black;
  width: 100%;
  padding: 8px 50px;
  border: none;
  letter-spacing: 0.5px;
  border: 1px solid;

  :hover {
    background-color: #1b1b1b;
    color: white;
    border: 1px solid white;
  }
`;

export const Text = styled.p`
  font: 400 14px "Share Tech Mono";
  margin: 15px 0 0 0;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 190px;
  padding: 0 19px 14px 13px;
  justify-content: space-between;
`;
