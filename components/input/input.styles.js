import styled from '@emotion/styled';

export const StyledInput = styled.input`
  display: block;
  border: 1px solid;
  border-color: ${({ error }) => (error ? 'red' : 'white')};
  color: white;
  background-color: transparent;
  height: 42px;
  padding: 12px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: 'Share Tech Mono';
    font-size: 16px;
    line-height: 150%;
    color: #fff;
  }
`;
