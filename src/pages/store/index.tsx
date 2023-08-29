import React, { useState, useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/index";
import useInput from "../../utils/hooks/useInput";

const DisCard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [briefInfo, onBrieftInfo, setBriefInfo] = useInput("");

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleCancle = useCallback(() => {
    navigate("/");
  }, []);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    console.log("입력값 체크함수");
    console.log("체크 되면 백엔드에 요청");
    console.log("결과를 모달로 안내함 (라벨링 안내 [버튼은 홈, 추가 보관]) ");
    setShowModal(false);
    navigate("/");
  }, []);

  return (
    <S.StorePageContainer>
      <S.InformContainer>알립니다</S.InformContainer>
      <S.ItemInfoInputContainer>
        <label>보관품에 대한 간단한 설명을 입력해주세요!</label>
        <input onChange={onBrieftInfo} />
      </S.ItemInfoInputContainer>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();

          console.log("submmmit");
        }}
      >
        <S.ButtonContainer>
          <button type={"reset"} onClick={handleCancle}>
            취소
          </button>
          <button
            type="button"
            onClick={(e: any) => {
              e.preventDefault();

              setShowModal(true);
            }}
            tabIndex={-1}
          >
            보관
          </button>
        </S.ButtonContainer>
        {showModal && (
          <Modal
            handleClose={onCloseModal}
            handleSubmit={handleSubmit}
            text="안녕 난 모달"
          />
        )}
      </form>
    </S.StorePageContainer>
  );
};

export default DisCard;
