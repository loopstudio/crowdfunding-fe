import {
  Button,
  SideBarButtonContainer,
  SideBarContainer,
  Subtitle,
  Title,
} from "./sideBar.styles.js";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Title>My Projects</Title>
      <Subtitle>Pledged projects</Subtitle>
      <Subtitle>Created projects</Subtitle>
      <Subtitle>Saved projects</Subtitle>

      <SideBarButtonContainer>
        <Button href="/create">+ New project</Button>
      </SideBarButtonContainer>
    </SideBarContainer>
  );
};
