import styled from "@emotion/styled";

import { Button } from "../../components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const StyledButton = styled(Button)`
  height: 42px;
  text-transform: uppercase;
  font-weight: bold;
`;
