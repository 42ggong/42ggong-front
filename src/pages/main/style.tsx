import styled from "@emotion/styled";

export const MainPageContainer = styled.div`
  padding: 20px;
  height: calc(100% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin 0 auto;
`;

export const GgongInfoContainer = styled.div`
  border: solid;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  min-height: 120px;
  // min-height: calc(30% - 35px);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: auto;
`;

export const LogoImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoutButtonContainer = styled.div`
  // border: solid;
  display: flex;
  height: 300px;
  // min-height: 300px;
  flex-direction: column;
  // border: solid;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  margin: 10px auto;
`;

export const ButtonRow = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;

export const RoutButton = styled.button`
  font-size: 18px;
  background-color: #5947ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 45%;
  height: 90%;
  margin: 10px auto;
  padding: 10px
  &:hover {
    background-color: #478eff;
  }
`;
