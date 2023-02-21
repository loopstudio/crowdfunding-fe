import { useEffect, useState } from "react";

import Image from "next/image";

import { Header } from "../../components/header/header.js";
import { SideBar } from "../../components/sideBar/sideBar.js";

import {
  AnalysisContainer,
  Button,
  ButtonDiscusion,
  Container,
  Grid,
  ImageContainer,
  ProgressBarContainer,
  Separator,
  StatisticsBox,
  StatisticsContainer,
  Text,
  TitleContainer,
} from "./project-detail.styles.js";

import { exampleList, forumlist } from "../../utils/exampleList.js";
import { ProgressBar } from "../../components/ProgressBar/progressBar.js";
import { Forum } from "../../components/forum/forum.js";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectById = exampleList.filter(
      (element) => element.id === urlParams.get("id")
    );
    if (projectById.length > 0) {
      setProject(projectById[0]);
    }
  }, []);

  return (
    <>
      <Header />
      {project && (
        <Container>
          <SideBar />
          <Grid>
            <ImageContainer>
              <Image fill src={project.image} alt="image" />
              <TitleContainer>
                <Text size={24}>Weekly Report</Text>
              </TitleContainer>
            </ImageContainer>
            <ButtonDiscusion>Start a Discussion</ButtonDiscusion>
            {forumlist.map((element, key) => (
              <div key={key}>
                <Separator />
                <Forum discussion={element} />
              </div>
            ))}
          </Grid>
          <AnalysisContainer>
            <Text size={20}>Project Analysis</Text>
            <ProgressBarContainer>
              <Text size={12}>Goal</Text>
              <ProgressBar
                percentage={
                  (project.currentAmount[0].amount * 100) /
                  project.goal[0].amount
                }
              />
            </ProgressBarContainer>
            <StatisticsContainer>
              <Text size={14}>Weekly Report</Text>
              <StatisticsBox />
              <StatisticsBox>
                <Text size={12}>Revenue</Text>
              </StatisticsBox>
              <StatisticsBox>
                <Text size={12}>Refunds</Text>
              </StatisticsBox>
              <StatisticsBox>
                <Text size={12}>Clients</Text>
              </StatisticsBox>
              <StatisticsBox>
                <Text size={12}>Pledges</Text>
              </StatisticsBox>
            </StatisticsContainer>
            <Button>Unpledge</Button>
          </AnalysisContainer>
        </Container>
      )}
    </>
  );
};

export default ProjectDetail;
