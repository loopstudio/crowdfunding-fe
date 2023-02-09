import Image from "next/image";

import { ProgressBar } from "../ProgressBar/progressBar";

import {
  ProjectContainer,
  Button,
  Text,
  InformationContainer,
} from "./project.styles.js";

export const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <Image
        priority
        src={project.image}
        height={138}
        width={243}
        alt="image"
      />
      <InformationContainer>
        <Text>{project.title}</Text>
        <Text>{project.endSate}</Text>
        {project.goal.length > 0 && (
          <Text>
            {project.goal[0].token} {project.goal[0].amount}
          </Text>
        )}
        <ProgressBar
          percentage={
            project.goal.length > 0 && project.currentAmount.length > 0
              ? project.currentAmount[0].amount * 100 / project.goal[0].amount
              : 0
          }
        />
        <Button type="button" value="Pledge" readOnly />
      </InformationContainer>
    </ProjectContainer>
  );
};
