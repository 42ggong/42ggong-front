import React, { useState } from "react";
import * as S from "./style";
import StatusBox from "./components/StatusBox/index";
import LogBox from "./components/LogBox/index";

const StatusAndLog = () => {
  const [isStatus, setIsStatus] = useState(true);

  return (
    <S.StatusAndLogPage>
      <S.InformContainer>
        안내메세지입니다 냉장고 현황 및 기록
      </S.InformContainer>
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
