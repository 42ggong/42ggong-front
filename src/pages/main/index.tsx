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
        <S.LogoImgContainer>
          <S.LogoImg src="/img/42ggongLogo.png" />
        </S.LogoImgContainer>
        <S.InfoTextContainer>
          <h2>42GGONG과함께</h2>
          {/* <div>같이 관리하는 냉장고!</div> */}
          <div>{`hyoparks님은`}</div>
          {/* <div>{`누군가 10번 대신 폐기해주셨네요!`}</div> */}
          <div>{`누군가를 대신해서 10번 폐기해주셨어요!`}</div>
          <div>기본 보관일은 2일이예요</div>
          <S.WarnText>
            누군가 3번이상 내 보관품을 폐기해주면 보관일이 1일이되요...{" "}
          </S.WarnText>
        </S.InfoTextContainer>
      </S.GgongInfoContainer>
      <S.Line />
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
            <div>내 보관품 확인</div>
            <div>및 찾기</div>
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
