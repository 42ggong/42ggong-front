import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import NavModal from "../NavModal/index";
import HomeButton from "./HomeButton";
import { AiOutlineAppstore } from "react-icons/ai";

interface Iprops {
  userName: string;
}

const NavBar = ({ userName }: Iprops) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <S.StyledNavBar>
      {/* <div style={{ display: "flex" }}> */}
      <S.MenuIconContainer>
        <HomeButton />
      </S.MenuIconContainer>
      <S.UserNameContainer>{`${userName}님과 함께 꽁!`}</S.UserNameContainer>
      {/* </div> */}
      <S.MenuIconContainer>
        <AiOutlineAppstore
          style={{ color: "#478eff", width: "100%", height: "100%" }}
          onClick={(e: any) => {
            if (location.pathname.replace("/", "") !== "")
              setShowModal(!showModal);
          }}
        />
      </S.MenuIconContainer>
      {showModal && <NavModal handleClose={onCloseModal} />}
    </S.StyledNavBar>
  );
};

export default NavBar;
