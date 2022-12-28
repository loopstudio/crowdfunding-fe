import { ProgressBarContainer, Progress } from "./progressBar.styles";

export const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <Progress percentage={percentage}></Progress>
    </ProgressBarContainer>
  );
};
