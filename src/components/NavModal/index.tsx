import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface Iprops {
  handleClose: () => void;
}

const NavModal = ({ handleClose }: Iprops) => {
  const navigate = useNavigate();
  const handleClick = useCallback((path: string) => {
    navigate(`/${path}`);
  }, []);

  return (
    <S.Test onClick={handleClose}>
      <S.ModalContainer>
        <S.ModalButtonContainer>
          <S.RoutButtonContainer>
            <S.ButtonRow>
              <S.RoutButton
                onClick={() => {
                  handleClick("store");
                  handleClose();
                }}
              >
                보관하기
              </S.RoutButton>
              <S.RoutButton
                onClick={() => {
                  handleClick("mylist");
                  handleClose();
                }}
              >
                내 보관품 확인 및 찾기{" "}
              </S.RoutButton>
            </S.ButtonRow>
            <S.ButtonRow>
              <S.RoutButton
                onClick={() => {
                  handleClick("discard");
                  handleClose();
                }}
              >
                폐기하기
              </S.RoutButton>
              <S.RoutButton
                onClick={() => {
                  handleClick("status");
                  handleClose();
                }}
              >
                냉장고 현황 및 기록{" "}
              </S.RoutButton>
            </S.ButtonRow>
          </S.RoutButtonContainer>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Test>
  );
};

export default NavModal;
