import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { SideBar, Header, Input, Dropdown, Modal } from "components";
import { useLaunch } from "hooks/useLaunch";
import { fetchTokens } from "utils/fetch";
import { postData } from "utils/post";
import { getMaxMinDate, getTomorrow } from "utils/date";
import { useCreateForm } from "hooks/useCreateForm";
import arrowIcon from "assets/icons/downArrow.svg";
import {
  END_DATE,
  FUND_GOAL,
  START_DATE,
  STORY,
  SUBTITLE,
  TITLE,
  URL,
  QUERIES,
  CAMPAIGN_MAX_DURATION,
  CAMPAIGN_MIN_DURATION,
  COLLABORATORS,
} from "../../constants";

import {
  Container,
  Form,
  DateInputContainer,
  Column,
  ColumnWrapper,
  DescriptionField,
  Label,
  StyledButton,
  BackButton,
  Title,
  OptionalLabel,
} from "./create.styles";

const Create = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: tokens, isLoading: isTokensLoading } = useQuery(
    [QUERIES.tokens],
    fetchTokens
  );

  const {
    errors,
    getValues,
    handleDate,
    handleTokenSelect,
    handleSubmit,
    register,
    watch,
    isValid,
  } = useCreateForm();

  const startDate = getValues(START_DATE);

  const { write } = useLaunch(watch(FUND_GOAL), getValues(), postData);

  const onSubmit = () => {
    write?.();
  };

  const handleModal = () => setIsModalOpen(true);

  return (
    <>
      <Header />

      <Container>
        <SideBar />

        <Modal isModalOpen={isModalOpen} handleModal={setIsModalOpen} />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <BackButton onClick={handleModal}>
            <Image src={arrowIcon} alt="arrow icon" /> <span>Back</span>
          </BackButton>

          <Title>Building My Project</Title>

          <ColumnWrapper>
            <Column>
              <Input
                {...register(TITLE)}
                label="Title"
                name={TITLE}
                error={errors?.title}
              />

              <DateInputContainer>
                <Input
                  {...register(START_DATE)}
                  type="date"
                  label="Launch Date"
                  min={getTomorrow()}
                  name={START_DATE}
                  onChange={(event) =>
                    handleDate(START_DATE, event.target.value)
                  }
                />
                <Input
                  {...register(END_DATE)}
                  type="date"
                  label="End Date"
                  min={getMaxMinDate(startDate, CAMPAIGN_MIN_DURATION)}
                  max={getMaxMinDate(startDate, CAMPAIGN_MAX_DURATION)}
                  name={END_DATE}
                  onChange={(event) => handleDate(END_DATE, event.target.value)}
                />
              </DateInputContainer>
              <Input
                {...register(FUND_GOAL)}
                label="Project Goal"
                name={FUND_GOAL}
                error={errors?.fundGoal}
              />

              <Input
                {...register(COLLABORATORS)}
                label={
                  <span>
                    Collaborators <OptionalLabel>(Optional)</OptionalLabel>
                  </span>
                }
                name={COLLABORATORS}
              />
            </Column>

            <Column>
              <Input
                {...register(SUBTITLE)}
                label="Subtitle"
                name={SUBTITLE}
                error={errors?.subtitle}
              />
              <Input
                {...register(URL)}
                label={
                  <span>
                    Project URL <OptionalLabel>(Optional)</OptionalLabel>
                  </span>
                }
                name={URL}
              />
              <Dropdown
                options={tokens}
                handleSelect={handleTokenSelect}
                label="Token"
                isLoading={isTokensLoading}
              />
            </Column>
          </ColumnWrapper>
          <Label htmlFor={STORY}>Description</Label>
          <DescriptionField
            {...register(STORY)}
            error={errors?.story}
            name={STORY}
            id={STORY}
          />

          <StyledButton type="submit" disabled={!write || !isValid}>
            Publish Project
          </StyledButton>
        </Form>
      </Container>
    </>
  );
};

export default Create;
