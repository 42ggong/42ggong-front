import React, { useState } from "react";
import * as S from "./style";
import DisCardBoxForm from "./components/DiscardBoxForm/index";
import ReDiscardBoxForm from "./components/ReDiscardBoxForm/index";

// TODO 일단 스타일컴포넌트 mylist랑 똑같이 해놓음 달라질 부분 생기면 변경 후 이름변경 아니면 임포트만 변경으로 추후에 바꿀예정
const DisCard = () => {
  const [isPossibleList, setIsPossibleList] = useState(true);

  return (
    <S.DiscardPageContainer>
      <S.InformContainer>
        <h2>폐기하기</h2>
        <span>유효기간이 지난 보관품은</span>
        <span>누구나 폐기할 수 있습니다!</span>
        <span>정리를 도와주면 패널티를 예방할 수 있어요!</span>
        {/* <span>함께 냉장고 정리 선순환을 만들어보아요!</span> */}
      </S.InformContainer>
      <S.Line />
      <S.MenuButtonContainer>
        <S.MenuButton
          onClick={() => {
            setIsPossibleList(true);
          }}
          style={{ background: `${isPossibleList ? "#5947ff" : "#bdb5ff"}` }}
        >
          폐기 가능 목록
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            setIsPossibleList(false);
          }}
          style={{ background: `${!isPossibleList ? "#5947ff" : "#bdb5ff"}` }}
        >
          목록 외 폐기
        </S.MenuButton>
      </S.MenuButtonContainer>
      <S.ListBoxContainer>
        {/* <S.ListBoxBorder> */}
        {isPossibleList ? <DisCardBoxForm /> : <ReDiscardBoxForm />}
        {/* </S.ListBoxBorder> */}
      </S.ListBoxContainer>
    </S.DiscardPageContainer>
  );
};

export default DisCard;
