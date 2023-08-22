import React, { useState, useCallback } from "react";
import * as S from "./style";

interface Iprops {
  onClose: () => void;
  handleSubmit: (e: any) => void;
  text: string;
}

const Modal = ({ onClose, handleSubmit, text }: Iprops) => {
  console.log("Tet", handleSubmit, onClose);
  return (
    <S.Test>
      <S.ModalContainer>
        <S.ModalTextContainer>{text}</S.ModalTextContainer>
        <S.ModalButtonContainer>
          <button onClick={onClose}>취소</button>
          <button type="submit" onClick={handleSubmit}>
            보관
          </button>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Test>
  );
};

export default Modal;
