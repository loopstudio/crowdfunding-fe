import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 250px;
  height: 210px;
  overflow: hidden;
  position: relative;
  margin: 0 42px 50px 0;
`;

export const SkeletonCard = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #eee;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
