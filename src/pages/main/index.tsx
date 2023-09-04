import React, { useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((path: string) => {
    navigate(`/${path}`);
  }, []);
  return (
    <S.MainPageContainer>
      <S.GgongInfoContainer>
        <S.LogoImg src="/img/42ggongLogo.png" />
        <h1>42GGONG과함께</h1>
        <h2>같이 관리하는 냉장고!</h2>
      </S.GgongInfoContainer>
      <S.RoutButtonContainer>
        <S.ButtonRow>
          <S.RoutButton
            onClick={() => {
              handleClick("store");
            }}
          >
            보관하기
          </S.RoutButton>
          <S.RoutButton
            onClick={() => {
              handleClick("mylist");
            }}
          >
            내 보관품 확인 및 찾기{" "}
          </S.RoutButton>
        </S.ButtonRow>
        <S.ButtonRow>
          <S.RoutButton
            onClick={() => {
              handleClick("discard");
            }}
          >
            폐기하기
          </S.RoutButton>
          <S.RoutButton
            onClick={() => {
              handleClick("status");
            }}
          >
            냉장고 현황 및 기록{" "}
          </S.RoutButton>
        </S.ButtonRow>
      </S.RoutButtonContainer>
    </S.MainPageContainer>
  );
};

export default Main;
