import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const AnalysisContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 38px 30px 30px 30px;
  right: 0px;
  width: 250px;
  border-left: .1px solid #FFFFFF;
  height: 100maxh;
  background-color: rgba(255, 255, 255, 0.06);
  flex-direction: column;
`;

export const Text = styled.a`
  font: ${({ size }) => `400 ${size}px Share Tech Mono`};
`;

export const TitleContainer = styled.a`
  position: absolute;
  margin: 24px 0 0 24px;
`;

export const Grid = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  padding: 63px 40px 40px 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  height: 115px;
`;

export const ButtonDiscusion = styled.a`
  display: flex;
  font: 400 16px 'Share Tech Mono';
  background-color: rgba(255, 255, 255, 0.35);
  padding: 8px 12px 8px 12px;
  border: 0.5px solid #FFFFFF;
  margin: 31px 0 36px 0;
`;

export const Separator = styled.div`
  height: 0.2px;
  background-color: white;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  margin: 24px 0 5px 0;
  height: 50px;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const StatisticsBox= styled.div`
  display: flex;
  height: 52px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  background: rgba(248, 248, 248, 0.06);
  border: 0.1px solid #FFFFFF;
  backdrop-filter: blur(5px);
  padding: 7px;
`;

export const Button = styled.a`
  display: flex;
  font: 400 16px 'Share Tech Mono';
  background-color: rgba(255, 255, 255, 0.06);
  padding: 8px 24px 8px 24px;
  border: 0.5px solid #FFFFFF;
  margin: 40px 0 36px 0;
`;

