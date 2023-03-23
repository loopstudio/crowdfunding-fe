import Link from "next/link";

import { ROUTES } from "../../constants";

import { SideBarContainer, Subtitle, Title } from "./sideBar.styles.js";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Title>My Projects</Title>
      <Link href={ROUTES.pledgedProjects}>
        <Subtitle>Pledged projects</Subtitle>
      </Link>
      <Link href={ROUTES.createdProjects}>
        <Subtitle>Created projects</Subtitle>
      </Link>
    </SideBarContainer>
  );
};
