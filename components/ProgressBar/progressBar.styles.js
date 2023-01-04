import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #ddd;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Progress = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${({ percentage }) => `${percentage}%`};
`;
