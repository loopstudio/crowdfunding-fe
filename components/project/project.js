import { ProgressBar } from "components";
import { getFormattedDate } from "utils/date";
import { today } from "../../constants";

import {
  ProjectContainer,
  Button,
  Text,
  InformationContainer,
  PendingButton,
} from "./project.styles.js";

export const Project = ({ project }) => {
  const startDate = new Date(project.startDate).getTime();

  const hasStarted = today.getTime() >= startDate;
  const hasOnchainId = !!project.onchainId;
  return (
    <ProjectContainer>
      <InformationContainer>
        <Text>{project.title}</Text>

        <Text>From: {getFormattedDate(project.startDate)}</Text>

        <Text>To: {getFormattedDate(project.endDate)}</Text>

        {project.goal.length > 0 && <Text>USDT ${project.goal[0].amount}</Text>}
        <ProgressBar
          percentage={
            project.goal.length > 0 && project.currentAmount.length > 0
              ? (project.currentAmount[0].amount * 100) / project.goal[0].amount
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
