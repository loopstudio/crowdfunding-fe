import styled from "@emotion/styled";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0 30px;
  border: 1px solid #fff;
  text-align: center;
  background-color: #222222;
  width: 369px;
  height: 500px;
`;

export const Title = styled.h1`
  font-family: "Share Tech Mono";
  font-weight: 400;
  margin: 15px 5px 5px 5px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 1px;
  color: ${(props) => (props.link ? "rgba(255, 255, 255, 0.42)" : "#fff")};
  color: ${(props) =>
    props.location === "/login" && props.login
      ? "#fff"
      : props.location === "/signup" && props.signUp
      ? "#fff"
      : null};
  border-right: ${(props) => (props.login ? "1px solid #fff" : null)};
  padding-right: ${(props) => (props.login ? "10px" : null)};
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
