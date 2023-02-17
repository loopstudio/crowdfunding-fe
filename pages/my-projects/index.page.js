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
  Title,
} from "./my-projects.styles";

import { Project } from "../../components/project/project.js";
import { Header } from "../../components/header/header.js";
import { SideBar } from "../../components/sideBar/sideBar.js";

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
      <SideBar />

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
                readOnly
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
