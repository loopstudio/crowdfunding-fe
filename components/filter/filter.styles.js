import styled from "@emotion/styled";

export const Button = styled.a`
  right: 0;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid white;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  animation: fill-background 0.3s ease-in-out forwards;

  &:hover {
    background-color: white;
    color: black;

    img {
      filter: invert(100%) grayscale(100%);
    }
  }
`;
