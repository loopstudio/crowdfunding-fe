import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const SelectInput = styled.select`
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
