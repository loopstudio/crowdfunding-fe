import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { SideBar, Header, Input, Slider, Dropdown } from "components";
import { fetchTokens } from "utils/fetch";
import arrowIcon from "assets/icons/downArrow.svg";
import { QUERIES } from "../../constants";

import {
  Container,
  Content,
  DateInputContainer,
  Column,
  ColumnWrapper,
  DescriptionField,
  Label,
  StyledButton,
  LinkWrapper,
} from "./creation.styles";

const Creation = () => {
  const { data: tokens, isLoading: isTokensLoading } = useQuery(
    [QUERIES.tokens],
    fetchTokens
  );
  const MIN = 0;
  const MAX = 1000;

  return (
    <>
      <Header />
      <Container>
        <SideBar />

        <Content arrowIcon={arrowIcon}>
          <Link href="/">
            <LinkWrapper>
              <Image src={arrowIcon} alt="arrow icon" /> <span>Back</span>
            </LinkWrapper>
          </Link>

          <h3>Building My Project</h3>

          <ColumnWrapper>
            <Column>
              <Input label="Title" name="title" />

              <DateInputContainer>
                <Input type="date" label="Launch Date" name="startDate" />
                <Input type="date" label="End Date" name="endDate" />
              </DateInputContainer>
              <Slider min={MIN} max={MAX} />
            </Column>

            <Column>
              <Input label="Subtitle" name="subtitle" />
              <Input label="Project URL" name="projectUrl" />
              <Dropdown options={tokens} />
            </Column>
          </ColumnWrapper>
          <Label htmlFor="description">Description</Label>
          <DescriptionField name="description" />

          <StyledButton>Publish Project</StyledButton>
        </Content>
      </Container>
    </>
  );
};

export default Creation;
