import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import {
  Header,
  Input,
  Filter,
  SideBar,
  CardSkeleton,
  Project,
  Pagination,
} from "components";
import { fetchCreatedCampaigns } from "utils/fetch";
import { QUERIES, SEARCH } from "../../constants";

import {
  Container,
  Content,
  Wrapper,
  CardContainer,
} from "./created-projects.styles";

const CreatedProjects = () => {
  const skeletons = new Array(3).fill(null);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");

  const { handleSubmit, register, reset } = useForm({
    defaultValues: { [SEARCH]: "" },
    mode: "onChange",
  });

  const {
    data: campaigns,
    isLoading,
    isError,
  } = useQuery(
    [QUERIES.campaigns, activePage, search],
    () => fetchCreatedCampaigns(activePage, search),
    {
      keepPreviousData: true,
    }
  );

  const onHandleSearch = ({ search }) => {
    setSearch(search);

    reset();
  };

  return (
    <>
      <Header />

      <Container>
        <SideBar />

        <Content>
          <h2>Created Projects</h2>
          <Wrapper>
            <form onSubmit={handleSubmit(onHandleSearch)}>
              <Input {...register(SEARCH)} placeholder="Search Project" />
            </form>
            <Filter />
          </Wrapper>

          <h4>{campaigns?.length} Created Projects</h4>

          <CardContainer>
            {isLoading || isError
              ? skeletons.map((_, index) => <CardSkeleton key={index} />)
              : campaigns.map((campaign, index) => (
                  <Project project={campaign} key={index} />
                ))}
          </CardContainer>
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            pages={2}
          />
        </Content>
      </Container>
    </>
  );
};

export default CreatedProjects;
