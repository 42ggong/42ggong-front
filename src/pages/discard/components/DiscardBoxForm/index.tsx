import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";

let dummyList = [
  { uid: "123123", expday: "10-21", info: "사과" },
  { uid: "123124", expday: "08-22", info: "배" },
  { uid: "123125", expday: "08-23", info: "두리안" },
  { uid: "123126", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁" },
  { uid: "123127", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁1" },
  { uid: "123128", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁2" },
  { uid: "123129", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁3" },
  { uid: "123111", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁4" },
  { uid: "123112", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁5" },
  { uid: "123113", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁6" },
  { uid: "123114", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁7" },
  { uid: "123115", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁8" },
  { uid: "123116", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁9" },
  { uid: "123117", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁0" },
  { uid: "123118", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁12" },
  { uid: "123119", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁13" },
  { uid: "123120", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁14" },
  { uid: "123141", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁15" },
  { uid: "123142", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁16" },
  { uid: "123143", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁17" },
  { uid: "123144", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁18" },
  { uid: "123145", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁19" },
  { uid: "123146", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁20" },
  { uid: "123147", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁22" },
  { uid: "123148", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁23" },
  { uid: "123149", expday: "08-24", info: "뷁뷁뷁뷁뷁뷁24" },
];

const today = new Date().toISOString().slice(5, 10);

const DiscardBoxForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [checkedArr, setCheckedArr] = useState(
    Array.from({ length: dummyList.length }, () => false)
  );
  const [deleteArr, setDeleteArr] = useState(
    Array.from({ length: dummyList.length }, () => false)
  );

  useEffect(() => {
    if (checkedArr.length < 1) setAllChecked(false);
    else if (checkedArr.indexOf(false) === -1) setAllChecked(true);
    else setAllChecked(false);
  }, [checkedArr]);

  const setCheckedArrByIndex = (index: any) => {
    const tmpArr = [...checkedArr];
    tmpArr[index] = !checkedArr[index];
    setCheckedArr(tmpArr);
  };

  const setDeleteArrByIndex = (index: any) => {
    const tmpArr = Array.from({ length: dummyList.length }, () => false);
    tmpArr[index] = true;
    setDeleteArr(tmpArr);
  };

  const generateButton = (listElement: any, index: any) => {
    if (listElement.expday > today)
      return (
        <S.PullButton
          onClick={(e) => {
            e.preventDefault();
            setModalText(
              `${listElement.uid} ${listElement.info} 를 처리합니다.
				반드시 냉장고에서
				꺼낸 후에 완료해주세요!`
            );
            setDeleteArrByIndex(index);
            setShowModal(true);
          }}
          tabIndex={-1}
        >
          찾기
        </S.PullButton>
      );
    return (
      <S.DiscardButton
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
      </S.DiscardButton>
    );
  };
  const countChecked = () => {
    return checkedArr.filter((element) => element === true).length;
  };

  const onSubmit = () => {
    dummyList = dummyList.filter(
      (element: any, index: any) => deleteArr[index] === false
    );
    setCheckedArr(Array.from({ length: dummyList.length }, () => false));
    setDeleteArr(Array.from({ length: dummyList.length }, () => false));
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
    setDeleteArr(checkedArr);
    setShowModal(true);
  };
  return (
    <>
      <S.ListBoxForm>
        <S.ListContainer>
          <S.ListItemContainer style={{ backgroundColor: "#6c5cff" }}>
            <S.ListItemCheckBoxContainer>
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
            </S.ListItemCheckBoxContainer>
            <S.ListItemColumn style={{ width: "60px" }}>
              식별자
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "60px" }}>
              유효기간
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "100px" }}>설명</S.ListItemColumn>
            <S.ListItemColumn style={{ width: "55px" }}> </S.ListItemColumn>
          </S.ListItemContainer>
          {dummyList.length > 1 ? (
            <S.ListRows>
              {dummyList.map((element: any, index: number) => {
                return (
                  <S.ListItemContainer
                    style={{ margin: "5px auto" }}
                    key={element.uid}
                  >
                    <S.ListItemCheckBoxContainer>
                      <S.ListItemCheckBox
                        type="checkbox"
                        checked={checkedArr[index]}
                        tabIndex={-1}
                        onChange={() => {
                          setCheckedArrByIndex(index);
                        }}
                      />
                    </S.ListItemCheckBoxContainer>
                    <S.ListItemColumn style={{ width: "60px" }}>
                      {element.uid}
                    </S.ListItemColumn>
                    <S.ListItemColumn style={{ width: "60px" }}>
                      {element.expday}
                    </S.ListItemColumn>
                    <S.ListItemColumn style={{ width: "100px" }}>
                      {element.info}
                    </S.ListItemColumn>
                    <S.ListItemColumn style={{ width: "55px" }}>
                      {generateButton(element, index)}
                    </S.ListItemColumn>
                  </S.ListItemContainer>
                );
              })}
            </S.ListRows>
          ) : (
            <h1>앗 아무고토 없어요!!</h1>
          )}
        </S.ListContainer>
        <S.ListFormButton
          onClick={onMultiDiscard}
          disabled={countChecked() < 1}
          tabIndex={-1}
        >
          선택 처리
        </S.ListFormButton>
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

export default DiscardBoxForm;
