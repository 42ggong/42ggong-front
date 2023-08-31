import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar";
import * as S from "./style";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "../utils/api/user";
import { useAccessToken } from "../utils/hooks/useAccessToekn";

const Layout = () => {
  const accessToken = useAccessToken();
  const queryClient = useQueryClient();
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser(accessToken.accessToken);
    },
  });
  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));
  return (
    <S.BackGroundContainer>
      <S.LayoutContainer>
        <NavBar userName={userQuery.data?.username} />
        <S.LayoutRect>
          {/* <S.Lay outLine /> */}
          <Outlet />
        </S.LayoutRect>
      </S.LayoutContainer>
    </S.BackGroundContainer>
  );
};

export default Layout;
