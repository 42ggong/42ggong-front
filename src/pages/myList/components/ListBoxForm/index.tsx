import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";

interface Iprops {
  dummyList: { uid: string; expday: string; info: string }[];
}

const today = new Date().toISOString().slice(5, 10);

const ListBoxForm = ({ dummyList }: Iprops) => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [allChecked, setAllChecked] = useState(false);
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
      (element: any, index: any) => checkedArr[index] === false
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
  return (
    <>
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

export default ListBoxForm;
