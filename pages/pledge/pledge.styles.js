import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;
export const LeftContent = styled.div`
  width: 70%;
  padding: 20px;
`;
export const RightContent = styled.div`
  width: 30%;
  margin: 20px;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 464px;
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
`;

export const DescriptionBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 0.2px solid #ffffff;
  backdrop-filter: blur(10px);
  padding: 20px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
