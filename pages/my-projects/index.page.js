import { useEffect, useState } from "react";

import { examplelist } from "../../utils/exampleList.js";

import {
  Button,
  Container,
  Content,
  NewProject,
  ProjectsContainer,
  Search,
  SearchContainer,
  SideBarButtonContainer,
  SideBarContainer,
  Subtitle,
  Title,
} from "./my-projects.styles";
import { Project } from "../../components/project/project.js";
import { Header } from "../../components/header/header.js";

const MyProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = () => {
    setLoading(true);
    // const result = setProjectsList(result); //FIXME interact with API when endpoint is ready
    setProjectsList(examplelist);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SideBarContainer>
          <Title>My Projects</Title>
          <Subtitle>Pledged projects</Subtitle>
          <Subtitle>Created projects</Subtitle>
          <Subtitle>Saved projects</Subtitle>

          <SideBarButtonContainer>
            <Button href="/create">+ New project</Button>
          </SideBarButtonContainer>
        </SideBarContainer>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Content>
            <Title>Pledged Projects</Title>
            <SearchContainer>
              <Search
                type="text"
                name="search"
                value="Search Project"
                id="search"
              />
              <Button>Filter</Button>
            </SearchContainer>

            <Title>
              {projectsList.length} Project{projectsList.length > 1 ? "s" : ""}
            </Title>
            <ProjectsContainer>
              {projectsList.map((element, key) => (
                <Project project={element} key={key} />
              ))}
              <NewProject>+ New Pledge</NewProject>
            </ProjectsContainer>
          </Content>
        )}
      </Container>
    </>
  );
};

export default MyProjects;
