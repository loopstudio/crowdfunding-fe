import styled from '@emotion/styled';

import { Button } from '../../components';

export const StyledButton = styled(Button)`
  border: 1px solid #fff;
  background-color: transparent;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 70px 0 0 0;
  color: #fff;
  padding: 8px 16px;
  font-family: 'Share Tech Mono';
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  cursor: pointer;

  :hover {
    background-color: #f3f4f6;
    color: #000;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  :disabled {
    background-color: rgba(255, 255, 255, 0.42);
    border-color: #000;
    color: #959da5;
    cursor: default;
  }

  :active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  :focus {
    outline: 1px transparent;
  }

  :before {
    display: none;
  }

  :-webkit-details-marker {
    display: none;
  }
`;
