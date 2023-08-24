import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";
import useInput from "../../../../utils/hooks/useInput";

const today = new Date().toISOString().slice(5, 10);

const ReDiscardBoxForm = () => {
  const [reDiscardArr, setReDiscardArr] = useState<any[]>([]);
  const [searchUid, onSearchUid, setSearchUid] = useInput("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // api 후 처리
    console.log(searchUid);
    // 배열에 추가하기전에 중복검사 필요
    if (searchUid && searchUid.trim() && reDiscardArr.indexOf(searchUid) === -1)
      setReDiscardArr([
        ...reDiscardArr,
        { uid: searchUid, expday: today, info: "몰루" },
      ]);
    setSearchUid("");
  };

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const countRediscard = () => {
    return reDiscardArr.length;
  };

  const onSubmit = () => {
    setReDiscardArr([]);
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  const onReDiscard = (e: any) => {
    e.preventDefault();
    const rediscardLength = countRediscard();
    setModalText(`총 ${rediscardLength}개의 보관품을
	  처리를 합니다.
	  반드시 냉장고에서
	  꺼낸 후에 완료해주세요!
	  `);
    setShowModal(true);
  };

  return (
    <>
      <form>
        <input value={searchUid} tabIndex={-1} onChange={onSearchUid}></input>
        <button type="submit" tabIndex={-1} onClick={handleSubmit}>
          검색 후 추가
        </button>
      </form>
      <>
        <S.ListBoxForm>
          <S.ListItemBorder style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            <S.ListItemColumn>식별자</S.ListItemColumn>
            <S.ListItemColumn>유효기간</S.ListItemColumn>
            <S.ListItemColumn>설명</S.ListItemColumn>
            <S.ListItemColumn> </S.ListItemColumn>
          </S.ListItemBorder>
          {reDiscardArr.map((element: any, index: number) => {
            return (
              <S.ListItemBorder key={element.uid}>
                <S.ListItemColumn>{element.uid}</S.ListItemColumn>
                <S.ListItemColumn>{element.expday}</S.ListItemColumn>
                <S.ListItemColumn>{element.info}</S.ListItemColumn>
                <S.ListItemColumn>
                  <button
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      const tmpArr = reDiscardArr.filter(
                        (ele, idx) => idx !== index
                      );
                      setReDiscardArr(tmpArr);
                    }}
                  >
                    x
                  </button>
                </S.ListItemColumn>
              </S.ListItemBorder>
            );
          })}
          <button
            onClick={onReDiscard}
            tabIndex={-1}
            disabled={countRediscard() < 1}
          >
            전체 처리
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
    </>
  );
};

export default ReDiscardBoxForm;
