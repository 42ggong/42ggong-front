import React, { useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((path: string) => {
    navigate(`/${path}`);
  }, []);
  return (
    <S.RoutButtonContainer>
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
    </S.RoutButtonContainer>
  );
};

export default Main;
