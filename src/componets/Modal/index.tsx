import React, { useState, useCallback } from "react";
import * as S from "./style";

interface Iprops {
  handleClose: () => void;
  handleSubmit: (e: any) => void;
  text: string;
}

const Modal = ({ handleClose, handleSubmit, text }: Iprops) => {
  console.log("Tet", handleSubmit, handleClose);
  return (
    <S.Test>
      <S.ModalContainer>
        <S.ModalTextContainer>{text}</S.ModalTextContainer>
        <S.ModalButtonContainer>
          <button onClick={handleClose}>취소</button>
          <button type="submit" onClick={handleSubmit}>
            완료
          </button>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Test>
  );
};

export default Modal;
