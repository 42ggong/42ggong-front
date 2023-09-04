import React, { useState, useEffect } from "react";
import * as S from "./style";
import ListBoxForm from "./components/ListBoxForm/index";

// TODO: 뒤로가기 버튼 추가

const MyList = () => {
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
    <S.MyListPageContainer>
      <S.InformContainer>
        <h2>나의 보관품 확인/찾기</h2>
        <div>내가 보관중인 보관품들이예요</div>
        <div>반드시 냉장고에서 꺼낸 후</div>
        <div>찾기/폐기 해주세요!</div>
      </S.InformContainer>
      <S.Line />
      <S.ListBoxContainer>
        {/* <S.ListBoxBorder> */}
        {/* <S.ListBoxButtonContainer></S.ListBoxButtonContainer> */}
        <ListBoxForm />
        {/* </S.ListBoxBorder> */}
      </S.ListBoxContainer>
    </S.MyListPageContainer>
  );
};

export default MyList;
