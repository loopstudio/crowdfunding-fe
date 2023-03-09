import { ProgressBar, Button } from "components";
import { getProgressPercentage } from "utils/percentage";

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

export const ProjectSideBar = ({ campaign, write, isOwner, setIsPledge }) => {
  const { goal, currentAmount } = campaign;

  return (
    <Container>
      <Title>Project Analysis</Title>

      <ProgressBarContainer>
        <ProgressBarLabelWrapper>
          <ProgressBarLabel>Goal</ProgressBarLabel>
          <ProgressBarLabel>{goal[0].amount} LT</ProgressBarLabel>
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
          <Value>{currentAmount[0].amount}LT</Value>
        </Box>

        <Box>
          <Subtitle>Refunds</Subtitle>
          <Value>0%</Value>
        </Box>

        <Box>
          <Subtitle>Pledges</Subtitle>
          <Value>0</Value>
        </Box>
      </BoxContainer>

      {isOwner ? (
        <Button disabled={!write} onClick={() => write?.()}>
          Claim
        </Button>
      ) : (
        <Button onClick={() => setIsPledge(true)}>Pledge Now</Button>
      )}
    </Container>
  );
};
