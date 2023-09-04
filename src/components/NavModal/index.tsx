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
                  if (location.pathname.replace("/", "") !== "store") {
                    handleClick("store");
                  }
                  handleClose();
                }}
              >
                보관하기
              </S.RoutButton>
              <S.RoutButton
                onClick={() => {
                  if (location.pathname.replace("/", "") !== "mylist") {
                    handleClick("mylist");
                  }
                  handleClose();
                }}
              >
                <div>내 보관품 확인</div>
                <div>및 찾기</div>
              </S.RoutButton>
            </S.ButtonRow>
            <S.ButtonRow>
              <S.RoutButton
                onClick={() => {
                  if (location.pathname.replace("/", "") !== "discard") {
                    handleClick("discard");
                  }
                  handleClose();
                }}
              >
                폐기하기
              </S.RoutButton>
              <S.RoutButton
                onClick={() => {
                  if (location.pathname.replace("/", "") !== "status") {
                    handleClick("status");
                  }
                  handleClose();
                }}
              >
                <div>냉장고 현황</div>
                <div>및 기록 </div>
              </S.RoutButton>
            </S.ButtonRow>
          </S.RoutButtonContainer>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Test>
  );
};

export default NavModal;
