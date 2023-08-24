import React, { useState } from "react";
import * as S from "./style";
import HomeButton from "../../components/HomeButton/index";
import DisCardBoxForm from "./components/DiscardBoxForm/index";
import ReDiscardBoxForm from "./components/ReDiscardBoxForm/index";

// TODO 일단 스타일컴포넌트 mylist랑 똑같이 해놓음 달라질 부분 생기면 변경 후 이름변경 아니면 임포트만 변경으로 추후에 바꿀예정
const DisCard = () => {
  const [isPossibleList, setIsPossibleList] = useState(true);

  return (
    <>
      <HomeButton />
      <S.InformContainer>안내메세지입니다 폐기하기</S.InformContainer>
      <S.ListBoxContainer>
        <S.ListBoxBorder>
          <S.ListBoxButtonContainer>
            <button
              onClick={() => {
                setIsPossibleList(true);
              }}
            >
              폐기 가능 목록
            </button>
            <button
              onClick={() => {
                setIsPossibleList(false);
              }}
            >
              목록 외 폐기
            </button>
          </S.ListBoxButtonContainer>
          {isPossibleList ? <DisCardBoxForm /> : <ReDiscardBoxForm />}
        </S.ListBoxBorder>
      </S.ListBoxContainer>
    </>
  );
};

export default DisCard;
