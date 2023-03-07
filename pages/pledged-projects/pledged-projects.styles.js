import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: 30px 80px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  h2 {
    margin-top: 6px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  input {
    margin-right: 26px;
    width: 388px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
`;
