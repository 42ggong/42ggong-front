import React, { useState } from "react";
import * as S from "./style";
import HomeButton from "../../components/HomeButton/index";
import StatusBox from "./components/StatusBox/index";
import LogBox from "./components/LogBox/index";

const DisCard = () => {
  const [isPossibleList, setIsPossibleList] = useState(true);

  return (
    <>
      <HomeButton />
      <S.InformContainer>
        안내메세지입니다 냉장고 현황 및 기록
      </S.InformContainer>
      <S.ListBoxContainer>
        <S.ListBoxBorder>
          <div>
            <S.ListBoxButtonContainer>
              <button
                onClick={() => {
                  setIsPossibleList(true);
                }}
              >
                냉장고 현황
              </button>
              <button
                onClick={() => {
                  setIsPossibleList(false);
                }}
              >
                냉장고 사용 기록
              </button>
            </S.ListBoxButtonContainer>
            {isPossibleList ? <StatusBox /> : <LogBox />}
          </div>
        </S.ListBoxBorder>
      </S.ListBoxContainer>
    </>
  );
};

export default DisCard;
