import React, { useState } from "react";
import * as S from "./style";
import StatusBox from "./components/StatusBox/index";
import LogBox from "./components/LogBox/index";

const StatusAndLog = () => {
  const [isStatus, setIsStatus] = useState(true);

  return (
    <S.StatusAndLogPage>
      <S.InformContainer>
        <h2>냉장고 현황과 기록</h2>
        <span>현재 냉장고에 보관된 물품들</span>
        <span>보관 찾음 폐기의</span>
        <span>기록들을 볼 수 있어요!</span>
      </S.InformContainer>
      <S.Line />
      <S.MenuButtonContainer>
        <S.MenuButton
          onClick={() => {
            setIsStatus(true);
          }}
          style={{ background: `${isStatus ? "#5947ff" : "#bdb5ff"}` }}
        >
          냉장고 현황
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            setIsStatus(false);
          }}
          style={{ background: `${!isStatus ? "#5947ff" : "#bdb5ff"}` }}
        >
          전체 사용 기록
        </S.MenuButton>
      </S.MenuButtonContainer>
      <S.ListBoxContainer>
        {isStatus ? <StatusBox /> : <LogBox />}
      </S.ListBoxContainer>
    </S.StatusAndLogPage>
  );
};

export default StatusAndLog;
