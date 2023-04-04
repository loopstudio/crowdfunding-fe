import { useRouter } from "next/router";

import { ProgressBar, Button } from "components";
import { getProgressPercentage } from "utils/percentage";
import { ACCESS_TOKEN, ROUTES } from "../../constants";

import {
  Container,
  Subtitle,
  Title,
  ProgressBarContainer,
  ProgressBarLabelWrapper,
  ProgressBarLabel,
  Box,
  BoxContainer,
  Value,
} from "./projectSideBar.style";

export const ProjectSideBar = ({ campaign, onClick, isOwner, setIsPledge }) => {
  const router = useRouter();
  const { goal, currentAmount } = campaign.campaign;

  const buttonToRender = () => {
    if (!sessionStorage.getItem(ACCESS_TOKEN))
      return (
        <Button onClick={() => router.push(ROUTES.login)}>
          Log in to Pledge
        </Button>
      );

    if (isOwner)
      return (
        <Button disabled={!onClick} onClick={() => onClick?.()}>
          Claim
        </Button>
      );

    return <Button onClick={() => setIsPledge(true)}>Pledge Now</Button>;
  };

  return (
    <Container>
      <Title>Project Analysis</Title>

      <ProgressBarContainer>
        <ProgressBarLabelWrapper>
          <ProgressBarLabel>Goal</ProgressBarLabel>
          <ProgressBarLabel>{goal[0].amount} USDT</ProgressBarLabel>
        </ProgressBarLabelWrapper>
        <ProgressBar
          percentage={getProgressPercentage(
            currentAmount[0].amount,
            goal[0].amount
          )}
        />
      </ProgressBarContainer>

      <Subtitle>Weekly Report</Subtitle>

      <BoxContainer>
        <Box>
          <Subtitle>Revenue</Subtitle>
          <Value>{currentAmount[0].amount} USDT</Value>
        </Box>

        <Box>
          <Subtitle>Pledges</Subtitle>
          <Value>{campaign.pledges}</Value>
        </Box>
      </BoxContainer>

      {buttonToRender()}
    </Container>
  );
};
