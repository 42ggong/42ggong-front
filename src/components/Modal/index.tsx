import React, { useState, useCallback } from "react";
import * as S from "./style";

interface Iprops {
  handleClose: () => void;
  handleSubmit: (e: any) => void;
  text: any;
}

const Modal = ({ handleClose, handleSubmit, text }: Iprops) => {
  console.log("Tet", handleSubmit, handleClose);
  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalTextContainer>{text}</S.ModalTextContainer>
        <S.ModalButtonContainer>
          <S.CancleButton onClick={handleClose}>취소</S.CancleButton>
          <S.SubmitButton type="submit" onClick={handleSubmit}>
            완료
          </S.SubmitButton>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
