import { useEffect, useState } from "react";
import {
  Card,
  CardProject,
  ClaimButton,
  Container,
  DescriptionBox,
  EditButton,
  ImageContainer,
  ProjectsContainer,
  Text,
  Title,
  TitleContainer,
} from "./my-projects.styles";
import Link from "next/link";

const examplelist = [
  {
    title: "Project 1",
    subtitle: "This is the subtitle",
    story: "This is the Projects story",
    startDate: "",
    endSate: "",
    id: "1234",
    fiatAmount: 5000,
    image:
      "https://www.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg",
    status: "active",
    goal: [{ token: "USD", amount: 0.865122 }],
    currentAmount: [{ token: "USD", amount: 0.00035 }],
    category: "Technology",
    owner: "user",
    statusHistory: [{ date: "", statis: "active", statusName: "active" }],
  },
  {
    title: "Project 1",
    subtitle: "This is the subtitle",
    story: "This is the Projects story",
    startDate: "",
    endSate: "",
    id: "1234",
    fiatAmount: 5000,
    image:
      "https://www.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg",
    status: "active",
    goal: [{ token: "USD", amount: 0.865122 }],
    currentAmount: [{ token: "USD", amount: 0.00035 }],
    category: "Technology",
    owner: "user",
    statusHistory: [{ date: "", statis: "active", statusName: "active" }],
  },
];

const MyProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = () => {
    setLoading(true);
    const result = setProjectsList(result); //FIXME interact with API when endpoint is ready
    setProjectsList(examplelist);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>My Projects</Title>
      </TitleContainer>
      <Link href="/create">
        <Card>Create new project</Card>
      </Link>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Title>
            {projectsList.length} Project{projectsList.length > 1 ? "s" : ""}
          </Title>
          <ProjectsContainer>
            {projectsList.map(
              ({ title, subtitle, image, id, endDate, goal }) => (
                <CardProject href="/project/1" key={id}>
                  <ImageContainer bkgImage={image}>
                    <EditButton href={`/edit/${id}`}>Edit</EditButton>
                  </ImageContainer>
                  <Title>{title}</Title>
                  <Text>{subtitle}</Text>
                  <DescriptionBox>
                    <p>Expiration Date: {endDate}</p>
                    <p>
                      Goal: {goal[0].token} {goal[0].amount}
                    </p>
                  </DescriptionBox>
                  <ClaimButton>Claim</ClaimButton>
                </CardProject>
              )
            )}
          </ProjectsContainer>
        </Container>
      )}
    </Container>
  );
};

export default MyProjects;
