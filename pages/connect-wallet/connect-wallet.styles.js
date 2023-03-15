import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 309px;
  margin: 180px 0 0 80px;
  z-index: 2;
  position: absolute;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 150%;
  font-weight: 400;
  margin-bottom: 0;
`;

export const Description = styled.p`
  font-family: NTR;
  font-size: 18px;
  line-height: 150%;
`;

export const Background = styled.div`
  overflow: hidden;
  z-index: -1;
`;
