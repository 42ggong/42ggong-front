import React, { useState, useEffect } from "react";
import * as S from "./style";
// import { useNavigate } from "react-router-dom";
import HomeButton from "../../components/HomeButton/index";
import ListBoxForm from "./components/ListBoxForm/index";

const dummyList = [
  { uid: "123123", expday: "08-21", info: "사과" },
  { uid: "123124", expday: "08-22", info: "배" },
  { uid: "123125", expday: "08-23", info: "두리안" },
  { uid: "123126", expday: "08-24", info: "오스트랄로피테쿠스" },
];
const MyList = () => {
  // const navigate = useNavigate();

  // TODO 리스트 박스를 컴포넌트로 빼서 관리 -> api 페칭할때 로딩화면이랑 리렌더효율용
  // ->분리는 했는데 더미데이터는 분리못했다... 리액트 쿼리 넣으면 캐싱데이터 쓰면 되니까 상관없을것같은데
  // 리코일 도입 여부도 생각을 좀 해야겠다.

  // TODO 보관품이 없을떄 안내문구 추가 -> 했는데 더 예쁘게 수정
  // TODO 일괄 처리 할때 버튼에 해당 포커싱 남아있는거-> 모달로 옮기기

  // if (dummyList.length < 1)
  //   return (
  //     <>
  //       <HomeButton />껙 아무데이터도 없어요 (대충 눈 x자 된 이모티콘)
  //     </>
  //   );
  return (
    <>
      <HomeButton />
      <S.InformContainer>안내메세지입니다 안내상</S.InformContainer>
      <S.ListBoxContainer>
        <S.ListBoxBorder>
          <S.ListBoxButtonContainer>
            <div>나의 보관품</div>
          </S.ListBoxButtonContainer>
          <ListBoxForm dummyList={dummyList} />
        </S.ListBoxBorder>
      </S.ListBoxContainer>
    </>
  );
};

export default MyList;
