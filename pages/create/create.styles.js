import styled from "@emotion/styled";

import { Button } from "components/button/button";

export const Container = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 45px;

  input {
    width: 100%;
    margin-top: 5px;
  }

  input[type="date"] {
    width: 152px;
  }

  label {
    font-family: NTR;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const DateInputContainer = styled.div`
  display: flex;
  gap: 23px;
`;

export const Column = styled.div`
  width: 327px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 67px;
`;

export const Label = styled.label`
  font-family: NTR;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
  margin-top: 40px;
`;

export const DescriptionField = styled.textarea`
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: transparent;
  padding: 24px;

  :focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const StyledButton = styled(Button)`
  font-size: 16px;
  align-self: flex-end;
  border-color: #ffffff99;
  padding: 8px 23px;
  margin-top: 24px;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    transform: rotate(90deg);
  }

  span {
    font-family: NTR;
    font-size: 18px;
    line-height: 150%;

    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }

    :hover:before {
      visibility: visible;
      width: 100%;
    }
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 8px;
`;

export const OptionalLabel = styled.span`
  color: #ffffff99;
`;
