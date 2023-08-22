import React, { useState, useEffect } from "react";
import * as S from "./style";
// import { useNavigate } from "react-router-dom";
import HomeButton from "../../componets/HomeButton/index";
import Modal from "../../componets/Modal/index";

const today = new Date().toISOString().slice(5, 10);

let dummyList = [
  { uid: "123123", expday: "08-21", info: "사과" },
  { uid: "123124", expday: "08-22", info: "배" },
  { uid: "123125", expday: "08-23", info: "두리안" },
  { uid: "123126", expday: "08-24", info: "오스트랄로피테쿠스" },
];

const Discard = () => {
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [modalText, setModalText] = useState("");
  const [checkedArr, setCheckedArr] = useState(
    Array.from({ length: dummyList.length }, () => false)
  );

  useEffect(() => {
    if (checkedArr.length < 1) setAllChecked(false);
    else if (checkedArr.indexOf(false) === -1) setAllChecked(true);
    else setAllChecked(false);
  }, [checkedArr]);

  const generateButton = (listElement: any) => {
    if (listElement.expday > today)
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            setModalText(
              `${listElement.uid} ${listElement.info} 를 처리합니다.
              반드시 냉장고에서
              꺼낸 후에 완료해주세요!`
            );
            setShowModal(true);
          }}
          tabIndex={-1}
        >
          찾기
        </button>
      );
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setModalText(
            `${listElement.uid} ${listElement.info} 를 처리합니다.
            반드시 냉장고에서
            꺼낸 후에 완료해주세요!`
          );
          setShowModal(true);
        }}
        tabIndex={-1}
      >
        폐기
      </button>
    );
  };
  const countChecked = () => {
    return checkedArr.filter((element) => element === true).length;
  };

  const generateText = () => {
    return;
  };

  const onSubmit = () => {
    dummyList = dummyList.filter(
      (element, index) => checkedArr[index] === false
    );
    setCheckedArr(Array.from({ length: dummyList.length }, () => false));
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  const onMultiDiscard = (e: any) => {
    e.preventDefault();
    const checkedLength = countChecked();
    setModalText(`총 ${checkedLength}개의 보관품을
    처리를 합니다.
    반드시 냉장고에서
    꺼낸 후에 완료해주세요!
    `);
    setShowModal(true);
  };
  // TODO 리스트 박스를 컴포넌트로 빼서 관리 -> api 페칭할때 로딩화면이랑 리렌더효율용
  // TODO 보관품이 없을떄 안내문구 추가 -> 했는데 더 예쁘게 수정
  // TODO 일괄 처리 할때 버튼에 해당 포커싱 남아있는거-> 모달로 옮기기

  if (dummyList.length < 1)
    return (
      <>
        <HomeButton />껙 아무데이터도 없어요 (대충 눈 x자 된 이모티콘)
      </>
    );
  return (
    <>
      <HomeButton />
      <S.InformContainer>안내메세지입니다 안내상</S.InformContainer>
      <S.ListBoxContainer>
        <S.ListBoxBorder>
          <S.ListBoxButtonContainer>
            <button>폐기 가능 목록</button>
            <button>목록 외 폐기</button>
          </S.ListBoxButtonContainer>
          <S.ListBoxForm>
            <S.ListItemBorder style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
              <S.ListItemCheckBox
                type="checkbox"
                checked={allChecked}
                tabIndex={-1}
                onChange={() => {
                  if (checkedArr.indexOf(false) === -1) {
                    setAllChecked(false);
                    setCheckedArr(
                      Array.from({ length: dummyList.length }, () => false)
                    );
                  } else {
                    setAllChecked(true);
                    setCheckedArr(
                      Array.from({ length: dummyList.length }, () => true)
                    );
                  }
                }}
              />
              <S.ListItemColumn>식별자</S.ListItemColumn>
              <S.ListItemColumn>유효기간</S.ListItemColumn>
              <S.ListItemColumn>설명</S.ListItemColumn>
              <S.ListItemColumn> </S.ListItemColumn>
            </S.ListItemBorder>
            {dummyList.map((element: any, index: number) => {
              return (
                <S.ListItemBorder key={element.uid}>
                  <S.ListItemCheckBox
                    type="checkbox"
                    checked={checkedArr[index]}
                    tabIndex={-1}
                    onChange={() => {
                      const tmpArr = [...checkedArr];
                      tmpArr[index] = !checkedArr[index];
                      setCheckedArr(tmpArr);
                    }}
                  />
                  <S.ListItemColumn>{element.uid}</S.ListItemColumn>
                  <S.ListItemColumn>{element.expday}</S.ListItemColumn>
                  <S.ListItemColumn>{element.info}</S.ListItemColumn>
                  <S.ListItemColumn>{generateButton(element)}</S.ListItemColumn>
                </S.ListItemBorder>
              );
            })}
            <button
              onClick={onMultiDiscard}
              disabled={countChecked() < 1}
              tabIndex={-1}
            >
              선택 처리
            </button>
            {showModal && (
              <Modal
                handleClose={onCloseModal}
                handleSubmit={onSubmit}
                text={modalText}
              />
            )}
          </S.ListBoxForm>
        </S.ListBoxBorder>
      </S.ListBoxContainer>
    </>
  );
};

export default Discard;
