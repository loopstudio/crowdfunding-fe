import { useEffect, useRef } from "react";
import { scrollElements } from "utils/scrollElements";
import { useQuery } from "@tanstack/react-query";

import {
  Header,
  Input,
  Filter,
  SideBar,
  CardSkeleton,
  Project,
} from "components";
import { fetchCampaigns } from "utils/fetch";
import { QUERIES } from "../../constants";

import {
  Container,
  Content,
  Wrapper,
  CardContainer,
} from "./created-projects.styles";

const CreatedProjects = () => {
  const sliderRecently = useRef();
  const sliderArts = useRef();
  const skeletons = new Array(5).fill(null);

  const {
    data: campaigns,
    isLoading,
    isError,
  } = useQuery([QUERIES.campaigns], fetchCampaigns);

  useEffect(() => {
    scrollElements(sliderRecently);
    scrollElements(sliderArts);
  }, []);

  return (
    <>
      <Header />

      <Container>
        <SideBar />

        <Content>
          <h3>Created Projects</h3>
          <Wrapper>
            <Input placeholder="Search Project" />
            <Filter />
          </Wrapper>

          <h4>{campaigns.length} Created Projects</h4>

          <CardContainer>
            {isLoading || isError
              ? skeletons.map((_, index) => <CardSkeleton key={index} />)
              : campaigns.map((campaign, index) => (
                  <Project project={campaign} key={index} />
                ))}
          </CardContainer>
        </Content>
      </Container>
    </>
  );
};

export default CreatedProjects;
