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
      <S.InformContainer>
        <S.InfromTitle>보관안내</S.InfromTitle>
        <S.InfromTextContainer>
          <S.InfromText>보관품에대한 간단한 설명 작성</S.InfromText>
          <S.InfromText>42ggong을 이용하여 라벨생성</S.InfromText>
          <S.InfromText>생성된 라벨을 보관품에 부착</S.InfromText>
          <S.InfromText>라벨을 붙이지 않으면</S.InfromText>
          <S.InfromText>언제든 폐기될수있어요!</S.InfromText>
        </S.InfromTextContainer>
      </S.InformContainer>
      <S.Line />
      <S.ItemInfoInputContainer>
        <S.ItemInfoInputLabel>
          보관품에대해 간단한 설명을 남겨보아요!
        </S.ItemInfoInputLabel>
        <S.ItemInfoInput onChange={onBrieftInfo} minLength={0} maxLength={8} />
        <div
          style={{ color: "gray", marginLeft: "65%" }}
        >{`${briefInfo.length}/8`}</div>
      </S.ItemInfoInputContainer>
      <S.Line />
      <form
        onSubmit={(e: any) => {
          e.preventDefault();

          console.log("submmmit");
        }}
      >
        <S.ButtonContainer>
          <S.CancleButton type={"reset"} onClick={handleCancle}>
            취소
          </S.CancleButton>
          <S.SubmitButton
            type="button"
            onClick={(e: any) => {
              e.preventDefault();

              setShowModal(true);
            }}
            tabIndex={-1}
          >
            보관
          </S.SubmitButton>
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
