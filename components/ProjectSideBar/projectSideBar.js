import { useMemo } from "react";
import { useRouter } from "next/router";
import { BigNumber, utils } from "ethers";

import { ProgressBar, Button } from "components";
import { getProgressPercentage } from "utils/percentage";
import { useAuth } from "context/AuthContext";
import { ROUTES } from "../../constants";

import {
  Box,
  BoxContainer,
  ButtonsWrapper,
  Container,
  ProgressBarContainer,
  ProgressBarLabel,
  ProgressBarLabelWrapper,
  Subtitle,
  Title,
  Value,
} from "./projectSideBar.style";

export const ProjectSideBar = ({
  campaign,
  numOfPledges,
  onClick,
  isOwner,
  setIsPledge,
  hasReachedEndDate,
  handleModal,
}) => {
  const router = useRouter();
  const { isUserAuthenticated } = useAuth();
  const { goal, currentAmount } = campaign;

  const roundedCurrAmount = Math.round(currentAmount[0].amount).toString();

  const formattedCurrentAmount = useMemo(
    () => utils.formatEther(BigNumber.from(roundedCurrAmount)),
    [roundedCurrAmount]
  );

  const buttonToRender = () => {
    if (!isUserAuthenticated)
      return (
        <Button onClick={() => router.push(ROUTES.login)}>
          Log in to Pledge
        </Button>
      );

    if (isOwner)
      return (
        <ButtonsWrapper>
          <Button disabled={!onClick} onClick={() => onClick?.()}>
            Claim
          </Button>
          <Button onClick={() => handleModal(true)}>Cancel Project</Button>
        </ButtonsWrapper>
      );

    return (
      <Button onClick={() => setIsPledge(true)} disabled={hasReachedEndDate}>
        {hasReachedEndDate ? "Finished campaign" : "Pledge Now"}
      </Button>
    );
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
            formattedCurrentAmount,
            goal[0].amount
          )}
        />
      </ProgressBarContainer>

      <Subtitle>Weekly Report</Subtitle>

      <BoxContainer>
        <Box>
          <Subtitle>Revenue</Subtitle>
          <Value>{formattedCurrentAmount} USDT</Value>
        </Box>

        <Box>
          <Subtitle>Pledges</Subtitle>
          <Value>{numOfPledges}</Value>
        </Box>
      </BoxContainer>

      {buttonToRender()}
    </Container>
  );
};
