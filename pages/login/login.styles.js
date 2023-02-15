import styled from '@emotion/styled';

import { Button } from '../../components';

export const Background = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid #fff;
  width: 369px;
  height: 521px;
`;

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

export const Title = styled.h1`
  font-family: 'Share Tech Mono';
  font-weight: 400;
  margin: 15px 5px 5px 5px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 1px;
  color: ${(props) => (props.link ? 'rgba(255, 255, 255, 0.42)' : '#fff')};
  color: ${(props) => (props.isHere ? '#fff' : null)};
  border-right: ${(props) => (props.login ? '1px solid #fff' : null)};
  padding-right: ${(props) => (props.login ? '10px' : null)};
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
