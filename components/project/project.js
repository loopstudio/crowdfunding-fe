import Image from "next/image";
import { useState } from "react";

import { ProgressBar } from "components";
import { getFormattedDate } from "utils/date";
import bookmark from "assets/icons/bookmark.svg";
import bookmarkFilled from "assets/icons/bookmarkFilled.svg";
import productImage from "assets/productImage.png";

import {
  ProjectContainer,
  Button,
  Text,
  InformationContainer,
  ImageContainer,
} from "./project.styles.js";

export const Project = ({ project }) => {
  const [isSaved, setIsSaved] = useState(false);

  const onBookmarkClick = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <ProjectContainer>
      <ImageContainer>
        <Image
          onClick={onBookmarkClick}
          src={isSaved ? bookmarkFilled : bookmark}
          alt="bookmark icon"
        />

        <Image
          priority
          src={productImage}
          height={138}
          width={243}
          alt="project image"
        />
      </ImageContainer>
      <InformationContainer>
        <Text>{project.title}</Text>
        <Text>{getFormattedDate(project.endDate)}</Text>
        {project.goal.length > 0 && <Text>LT ${project.goal[0].amount}</Text>}
        <ProgressBar
          percentage={
            project.goal.length > 0 && project.currentAmount.length > 0
              ? (project.currentAmount[0].amount * 100) / project.goal[0].amount
              : 0
          }
        />
        <Button href={`/pledge/${project.onchainId}`}>View details</Button>
      </InformationContainer>
    </ProjectContainer>
  );
};
