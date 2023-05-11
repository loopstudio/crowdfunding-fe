import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: flex-start;
  background-color: #ffffff0f;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 40px;
  position: absolute;
  right: 0;
  white-space: nowrap;

  button {
    font-size: 16px;
    padding: 12px 24px;
    margin: 435px 0 0 65px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  line-height: 150%;
`;

export const InputContainer = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${({ isActive }) =>
    isActive ? "white" : "rgba(255,255,255,0.25)"};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.06);
  width: 293px;
  align-items: center;
`;

export const ActiveInputContainer = styled.div`
  border-radius: 50%;
  border: 1px solid white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ActiveInput = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

export const Placeholder = styled.span`
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
`;

export const Currency = styled.span`
  font-size: 16px;
  line-height: 150%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 26px;
  width: 76px;
  font-family: "Share Tech Mono";

  :focus {
    outline: none;
  }
`;
