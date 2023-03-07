import Link from "next/link";

import { SideBarContainer, Subtitle, Title } from "./sideBar.styles.js";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Title>My Projects</Title>
      <Link href="pledged-projects">
        <Subtitle>Pledged projects</Subtitle>
      </Link>
      <Link href="created-projects">
        <Subtitle>Created projects</Subtitle>
      </Link>
    </SideBarContainer>
  );
};
