import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import {
  Header,
  Input,
  SideBar,
  CardSkeleton,
  Project,
  Pagination,
} from "components";
import { fetchCreatedCampaigns } from "utils/fetch";
import { calculatePages } from "utils/pagination";
import {
  QUERIES,
  SEARCH,
  TOTAL,
  AMOUNT_OF_ELEMENTS_PER_PAGE,
} from "../../constants";

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

  const { data, isLoading, isError } = useQuery(
    [QUERIES.campaigns, TOTAL, activePage, search],
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
          </Wrapper>

          <h4>{data?.total} Created Projects</h4>

          <CardContainer>
            {isLoading || isError
              ? skeletons.map((_, index) => <CardSkeleton key={index} />)
              : data.campaigns.map((campaign, index) => (
                  <Project project={campaign} key={index} />
                ))}
          </CardContainer>
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            pages={calculatePages(data?.total, AMOUNT_OF_ELEMENTS_PER_PAGE)}
          />
        </Content>
      </Container>
    </>
  );
};

export default CreatedProjects;
