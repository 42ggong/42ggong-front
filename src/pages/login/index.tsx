import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../utils/api/atom";
import * as S from "./style";

const Login = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log("accessToken", accessToken);
  return (
    <S.LoginPageContainer>
      <S.LoginContainer>
        <S.LogoContainer>
          <S.LogoImg src="/img/42ggongLogo.png"></S.LogoImg>
          <S.LogoText>42GGONG</S.LogoText>
        </S.LogoContainer>
        <S.LogoContainer>
          <S.Line />
          <S.JoinUs>같이 관리해요!</S.JoinUs>
          <S.LoginButton
            onClick={async (e) => {
              e.preventDefault();
              window.location.href =
                "http://localhost:8080/oauth2/authorization/ft";

              //   try {
              //     await axios
              //       .get("/oauth2/authorization/ft")
              //       .then((result: any) => {
              //         console.log("re", result);
              //         // setAccessToken(JSON.stringify(result).accessToken);
              //         console.log("a");
              //       });
              //   } catch (e) {
              //     // setAccessToken("b");
              //     alert("실패~!");
              //     console.log("b");
              //   }
            }}
          >
            42 LOGIN
          </S.LoginButton>
          <S.Line />
        </S.LogoContainer>
      </S.LoginContainer>
    </S.LoginPageContainer>
  );
};
export default Login;
