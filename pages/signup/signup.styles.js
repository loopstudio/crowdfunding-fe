import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  width: 369px;
  height: 521px;
`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  text-align: start;
`;

export const Title = styled.h1`
  font-family: 'Share Tech Mono';
  font-weight: 400;
  margin: 15px 5px 5px 5px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 1px;
  color: #fff;
  border-right: ${(props) => (props.login ? '1px solid' : null)};
  padding-right: ${(props) => (props.login ? '10px' : null)};
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
