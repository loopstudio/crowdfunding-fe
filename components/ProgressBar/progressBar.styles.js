import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(123, 123, 123, 0.35);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 17px;
  margin-top: 10px
`;

export const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #F08548 2.44%, rgba(151, 71, 255, 0.96) 80.08%);
  width: ${({ percentage }) => `${percentage}%`};
`;
