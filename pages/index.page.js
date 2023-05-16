import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Header, CardSkeleton, Project, Input, Pagination } from "components";
import { fetchCampaigns } from "utils/fetch";
import { calculatePages } from "utils/pagination";
import { QUERIES, SEARCH, NUM_OF_ELEMENTS_MAIN, ROUTES } from "../constants";
import planet from "assets/big-logo.svg";
import add from "assets/icons/add.svg";

import {
  Main,
  TitleContainer,
  Title,
  Grid,
  ButtonsContainer,
  Button,
  ProjectContainer,
  Wrapper,
  TextWrapper,
  PaginationContainer,
  PlanetImg,
  PlanetImgWrapper,
} from "../styles/Home.module.js";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");

  const skeletons = new Array(4).fill(null);

  const { data, isLoading, isError } = useQuery(
    [QUERIES.campaigns, activePage, search],
    () => fetchCampaigns(activePage, search)
  );

  const { handleSubmit, register, reset } = useForm({
    defaultValues: { [SEARCH]: "" },
    mode: "onChange",
  });

  const onHandleSearch = ({ search }) => {
    setSearch(search);

    reset();
  };

  return (
    <>
      <Head>
        <title>Crowdfunding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />

        <PlanetImgWrapper>
          <PlanetImg src={planet} alt="Logo" height={600} width={800} />
        </PlanetImgWrapper>

        <TitleContainer>
          <Title>CROWD</Title>
          <Title>FUNDING</Title>
        </TitleContainer>

        <Grid>
          <Wrapper>
            <TextWrapper>
              <span>Recently launched projects</span>
            </TextWrapper>

            <ButtonsContainer>
              <form onSubmit={handleSubmit(onHandleSearch)}>
                <Input
                  placeholder="Search Project"
                  isSearch
                  {...register(SEARCH)}
                />
              </form>

              <Button href={ROUTES.create}>
                <Image height={15} width={15} src={add} alt="add icon" />
                New Project
              </Button>
            </ButtonsContainer>
          </Wrapper>

          <ProjectContainer>
            {isLoading || isError
              ? skeletons.map((_, index) => <CardSkeleton key={index} />)
              : data.campaigns.map((campaign, index) => (
                  <Project project={campaign} key={index} />
                ))}
          </ProjectContainer>
          <PaginationContainer>
            <Pagination
              activePage={activePage}
              setActivePage={setActivePage}
              pages={calculatePages(data?.total, NUM_OF_ELEMENTS_MAIN)}
            />
          </PaginationContainer>
        </Grid>

        <ToastContainer />
      </Main>
    </>
  );
}
