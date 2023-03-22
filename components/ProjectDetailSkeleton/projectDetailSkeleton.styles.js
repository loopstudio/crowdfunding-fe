import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px;
`;

export const TitleBox = styled.div`
  height: 60px;
  width: 290px;
  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const DescriptionTagBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  height: 43px;
  border-radius: 1000px;
  width: 129px;
  text-align: center;

  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const DescriptionBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 1000px;
  height: 500px;
  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  left: 0px;
  min-height: 100vh;
  background-color: #ffffff0f;
  flex-direction: column;
  gap: 24px;
  white-space: nowrap;
  width: 390px;
`;

export const SideBarText = styled.div`
  width: 100%;
  height: 30px;

  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const SideBarBox = styled.div`
  width: 100%;
  height: 52px;

  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const SideBarBoxContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const SideBarButton = styled.div`
  width: 60%;
  height: 40px;
  margin-top: 100px;
  margin-left: 50px;

  background-color: #ffffff0f;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
