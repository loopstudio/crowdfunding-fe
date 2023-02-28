import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: 30px 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
`;
