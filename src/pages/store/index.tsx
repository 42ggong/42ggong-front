import React, { useState, useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useInput from "../../utils/hooks/useInput";
import HomeButton from "../../componets/HomeButton/index";

const DisCard = () => {
  const navigate = useNavigate();
  const [briefInfo, setBriefInfo, onBrieftInfo] = useInput("");
  const handleCancle = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <>
      <HomeButton />
      <S.InformContainer>알립니다</S.InformContainer>
      <S.ItemInfoInputContainer>
        <label>보관품에 대한 간단한 설명을 입력해주세요!</label>
        <input onChange={onBrieftInfo} />
      </S.ItemInfoInputContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("api post");
        }}
      >
        <S.ButtonContainer>
          <button type={"reset"} onClick={handleCancle}>
            취소
          </button>
          <button type={"submit"}>보관</button>
        </S.ButtonContainer>
      </form>
    </>
  );
};

export default DisCard;
