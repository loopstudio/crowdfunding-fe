import { useState } from "react";

import { Button } from "components";
import { PLEDGE_AMOUNT } from "../../constants";

import {
  Container,
  Title,
  InputContainer,
  ActiveInputContainer,
  ActiveInput,
  Placeholder,
  Currency,
  Wrapper,
  Input,
} from "./pledgeSideBar.styles";

export const PledgeSideBar = ({ register, handleSubmit, onSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const onActivateInput = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Container>
      <Title>Pledge</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer isActive={isActive}>
          <ActiveInputContainer onClick={onActivateInput}>
            {isActive && <ActiveInput />}
          </ActiveInputContainer>

          {isActive ? (
            <Wrapper>
              <Input
                dir="rtl"
                {...register(PLEDGE_AMOUNT)}
                name={PLEDGE_AMOUNT}
              />

              <Currency>LT</Currency>
            </Wrapper>
          ) : (
            <Placeholder onClick={onActivateInput}>Type Pledge</Placeholder>
          )}
        </InputContainer>

        <Button type="submit">Go to Metamask</Button>
      </form>
    </Container>
  );
};
