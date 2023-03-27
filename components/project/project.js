import { ProgressBar } from "components";
import { getFormattedDate } from "utils/date";

import {
  ProjectContainer,
  Button,
  Text,
  InformationContainer,
} from "./project.styles.js";

export const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <InformationContainer>
        <Text>{project.title}</Text>
        <Text>{getFormattedDate(project.endDate)}</Text>
        {project.goal.length > 0 && <Text>USDT ${project.goal[0].amount}</Text>}
        <ProgressBar
          percentage={
            project.goal.length > 0 && project.currentAmount.length > 0
              ? (project.currentAmount[0].amount * 100) / project.goal[0].amount
              : 0
          }
        />
        <Button href={`/project/${project.onchainId}`}>View details</Button>
      </InformationContainer>
    </ProjectContainer>
  );
};
