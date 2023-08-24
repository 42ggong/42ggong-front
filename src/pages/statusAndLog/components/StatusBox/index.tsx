import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";

let dummyList = [
  { uid: "123123", expday: "08-21", info: "사과" },
  { uid: "123124", expday: "08-22", info: "배" },
  { uid: "123125", expday: "08-24", info: "두리안" },
  { uid: "123126", expday: "08-24", info: "오스트랄로피테쿠스" },
];

const today = new Date().toISOString().slice(5, 10);

const StatusBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  // const [allChecked, setAllChecked] = useState(false);
  // const [checkedArr, setCheckedArr] = useState(
  //   Array.from({ length: dummyList.length }, () => false)
  // );
  const [deleteArr, setDeleteArr] = useState(
    Array.from({ length: dummyList.length }, () => false)
  );

  // useEffect(() => {
  //   if (checkedArr.length < 1) setAllChecked(false);
  //   else if (checkedArr.indexOf(false) === -1) setAllChecked(true);
  //   else setAllChecked(false);
  // }, [checkedArr]);

  // const setCheckedArrByIndex = (index: any) => {
  //   const tmpArr = [...checkedArr];
  //   tmpArr[index] = !checkedArr[index];
  //   setCheckedArr(tmpArr);
  // };

  const setDeleteArrByIndex = (index: any) => {
    const tmpArr = Array.from({ length: dummyList.length }, () => false);
    tmpArr[index] = true;
    setDeleteArr(tmpArr);
  };

  const generateButton = (listElement: any, index: any) => {
    if (listElement.expday >= today)
      if (listElement.info === "오스트랄로피테쿠스")
        // 본인건지아닌지 조건 추가해서 찾기 버튼도 기능해주자
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
      else return <></>;
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setModalText(
            `${listElement.uid} ${listElement.info} 를 처리합니다.
			  반드시 냉장고에서
			  꺼낸 후에 완료해주세요!`
          );
          // TODO 선택 누루고 폐기 누르면 에러 -> 단일 모달을 따로 처리할 방법 생각
          // setCheckedArrByIndex(index);
          setDeleteArrByIndex(index);
          setShowModal(true);
        }}
        tabIndex={-1}
      >
        폐기
      </button>
    );
  };
  // const countChecked = () => {
  //   return checkedArr.filter((element) => element === true).length;
  // };

  const onSubmit = () => {
    dummyList = dummyList.filter(
      (element: any, index: any) => deleteArr[index] === false
    );
    // setCheckedArr(Array.from({ length: dummyList.length }, () => false));
    setDeleteArr(Array.from({ length: dummyList.length }, () => false));
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  return (
    <>
      <S.ListBoxForm>
        <S.ListItemBorder style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          <S.ListItemColumn>식별자</S.ListItemColumn>
          <S.ListItemColumn>유효기간</S.ListItemColumn>
          <S.ListItemColumn>설명</S.ListItemColumn>
          <S.ListItemColumn> </S.ListItemColumn>
        </S.ListItemBorder>
        {dummyList.map((element: any, index: number) => {
          return (
            <S.ListItemBorder
              key={element.uid}
              style={{ backgroundColor: element.expday < today ? "red" : "" }}
            >
              <S.ListItemColumn>{element.uid}</S.ListItemColumn>
              <S.ListItemColumn>{element.expday}</S.ListItemColumn>
              <S.ListItemColumn>{element.info}</S.ListItemColumn>
              <S.ListItemColumn>
                {generateButton(element, index)}
              </S.ListItemColumn>
            </S.ListItemBorder>
          );
        })}
      </S.ListBoxForm>
      {showModal && (
        <Modal
          handleClose={onCloseModal}
          handleSubmit={onSubmit}
          text={modalText}
        />
      )}
    </>
  );
};

export default StatusBox;
