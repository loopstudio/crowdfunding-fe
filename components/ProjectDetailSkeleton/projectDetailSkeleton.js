import { Header } from "components";

import {
  Container,
  Wrapper,
  TitleBox,
  DescriptionTagBox,
  DescriptionBox,
  SideBar,
  SideBarBox,
  SideBarText,
  SideBarBoxContainer,
  SideBarButton,
} from "./projectDetailSkeleton.styles";

export const ProjectDetailSkeleton = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <TitleBox />

          <DescriptionTagBox />

          <DescriptionBox />
        </Wrapper>

        <SideBar>
          <SideBarText />
          <SideBarText />
          <SideBarText />

          <SideBarBoxContainer>
            <SideBarBox />
            <SideBarBox />
          </SideBarBoxContainer>

          <SideBarButton />
        </SideBar>
      </Container>
    </>
  );
};
