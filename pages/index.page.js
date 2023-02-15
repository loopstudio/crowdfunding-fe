import { useEffect, useRef } from "react";

import Head from "next/head";
import Image from "next/image";

import bigLogo from "../assets/big-logo.svg";

import { Header } from "../components/header/header";
import { Project } from "../components/project/project";
import { examplelist } from "../utils/exampleList";
import { scrollElements } from "../utils/scrollElements";

import {
  Main,
  TitleContainer,
  Title,
  LogoContainer,
  Grid,
  GridTitles,
  GridButtonsContainer,
  BoxSearch,
  BoxProject,
  BoxFilter,
  ProjectContainer,
} from "../styles/Home.module.js";

export default function Home() {
  const sliderRecently = useRef();
  const sliderArts = useRef();

  useEffect(() => {
    scrollElements(sliderRecently);
    scrollElements(sliderArts);
  }, []);

  return (
    <>
      <Head>
        <title>Crowdfunding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />

        <LogoContainer>
          <Image src={bigLogo} alt="Logo" fill />
        </LogoContainer>

        <TitleContainer>
          <Title>CROWD</Title>
          <Title>FOUNDING</Title>
        </TitleContainer>

        <Grid>
          <GridButtonsContainer>
          <div>
              <BoxSearch
                type="text"
                name="search"
                value="Search  Project"
                id="search"
                readOnly
              />
              <BoxFilter type="button" value="Filter" readOnly />
            </div>
            <BoxProject href="/create">+ New Project</BoxProject>
          </GridButtonsContainer>

          <GridTitles>Recently launched projects</GridTitles>

          <ProjectContainer ref={sliderRecently}>
            {examplelist.map((element, key) => (
              <Project project={element} key={key} />
            ))}
          </ProjectContainer>
          <GridTitles>Arts & Crafts</GridTitles>
          <ProjectContainer ref={sliderArts}>
            {examplelist.map((element, key) => (
              <Project project={element} key={key} />
            ))}
          </ProjectContainer>
        </Grid>
      </Main>
    </>
  );
}
