import { useMemo } from "react";
import { BigNumber, utils } from "ethers";

import { ProgressBar } from "components";
import { getFormattedDate } from "utils/date";
import { today } from "../../constants";

import {
  ProjectContainer,
  Button,
  Text,
  InformationContainer,
  PendingButton,
  TextWrapper,
  Title,
} from "./project.styles.js";

export const Project = ({ project }) => {
  const startDate = new Date(project.startDate).getTime();

  const hasStarted = today.getTime() >= startDate;
  const hasOnchainId = !!project.onchainId;

  const roundedCurrAmount = Math.round(project.currentAmount[0].amount).toString();

  const formattedCurrentAmount = useMemo(
    () => utils.formatEther(BigNumber.from(roundedCurrAmount)),
    [roundedCurrAmount]
  );

  return (
    <ProjectContainer>
      <InformationContainer>
        <Title>{project.title}</Title>

        <TextWrapper>
          <Text>Start date</Text>{" "}
          <Text>{getFormattedDate(project.startDate)}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>End date</Text> <Text>{getFormattedDate(project.endDate)}</Text>
        </TextWrapper>
        {project.goal.length > 0 && (
          <TextWrapper>
            <Text>Goal</Text> <Text>USDT ${project.goal[0].amount}</Text>
          </TextWrapper>
        )}
        <ProgressBar
          percentage={
            project.goal.length > 0 && project.currentAmount.length > 0
              ? (formattedCurrentAmount * 100) / project.goal[0].amount
              : 0
          }
        />
        {hasStarted && hasOnchainId ? (
          <Button href={`/project/${project.onchainId}`}>View details</Button>
        ) : (
          <PendingButton>
            {hasOnchainId ? "Coming soon" : "Creating"}
          </PendingButton>
        )}
      </InformationContainer>
    </ProjectContainer>
  );
};
