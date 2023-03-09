import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  left: 0px;
  min-height: 100vh;
  background-color: #ffffff0f;
  flex-direction: column;
  gap: 18px;
  white-space: nowrap;

  button {
    font-size: 16px;
    padding: 12px 24px;
    margin: 139px auto 0;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  line-height: 150%;
`;

export const ProgressBarContainer = styled.div`
  width: 288px;
  div:nth-of-type(2) {
    margin-top: 0px;
  }
`;

export const ProgressBarLabel = styled.span`
  font-family: NTR;
  font-size: 14px;
  line-height: 150%;
`;

export const ProgressBarLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Subtitle = styled.span`
  font-family: NTR;
  font-size: 18px;
  line-height: 150%;
`;

export const Box = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Value = styled.span`
  font-size: 30px;
  line-height: 150%;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
