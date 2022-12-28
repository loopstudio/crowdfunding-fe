import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  border: 0.2px solid grey;
  padding: 20px 12px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  padding: 50px;
`;

export const Text = styled.span`
  weight: 500;
  size: 14px;
  margin-bottom: 10px;
`;
