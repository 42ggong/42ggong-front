import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar";
import * as S from "./style";

const Layout = () => {
  return (
    <S.BackGroundContainer>
      <S.LayoutContainer>
        <NavBar />
        <S.LayoutRect>
          {/* <S.Lay outLine /> */}
          <Outlet />
        </S.LayoutRect>
      </S.LayoutContainer>
    </S.BackGroundContainer>
  );
};

export default Layout;
