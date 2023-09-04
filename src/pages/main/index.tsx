import React, { useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/api/user";
import { useAccessToken } from "../../utils/hooks/useAccessToekn";

const Main = () => {
  const navigate = useNavigate();
  const accessToken = useAccessToken();
  const handleClick = useCallback((path: string) => {
    navigate(`/${path}`);
  }, []);
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser(accessToken.accessToken);
    },
  });
  userQuery.refetch();
  const generateInofText = () => {
    if (userQuery.data?.benefitPoint === userQuery.data?.penaltyPoint)
      return "냉장고를 함께 관리해보아요!";
    else if (userQuery.data?.benefitPoint < userQuery.data?.penaltyPoint)
      return `누군가 ${userQuery.data?.penaltyPoint}번 대신 폐기해주셨네요!`;
    else if (userQuery.data?.benefitPoint > userQuery.data?.penaltyPoint)
      return `누군가를 대신해서 ${userQuery.data?.benefitPoint}번 폐기해주셨어요!`;
    else return "";
  };

  return (
    <S.MainPageContainer>
      <S.GgongInfoContainer>
        <S.LogoImgContainer>
          <S.LogoImg src="/img/42ggongLogo.png" />
        </S.LogoImgContainer>
        <S.InfoTextContainer>
          <h2>42GGONG과함께</h2>
          {/* <div>같이 관리하는 냉장고!</div> */}
          <div>{`${userQuery.data?.username}님`}</div>
          <div>{generateInofText()}</div>
          <div>Tip! 기본 보관일은 2일이예요</div>
          <S.WarnText>
            누군가 3번이상 내 보관품을 폐기해주면 보관일이 1일이되요!{" "}
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
