import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../utils/api/atom";
import * as S from "./style";

const Login = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log("accessToken", accessToken);
  return (
    <div>
      <img></img>
      <div>42GGONG</div>
      <div>같이 관리해요!</div>
      <S.LoginButton
        onClick={async (e) => {
          e.preventDefault();
          try {
            await axios.get("/oauth2/authorization/ft").then((result: any) => {
              console.log("re", result);
              // setAccessToken(JSON.stringify(result).accessToken);
              console.log("a");
            });
          } catch (e) {
            // setAccessToken("b");
            alert("실패~!");
            console.log("b");
          }
        }}
      >
        login
        <br />
        with 42
      </S.LoginButton>
      <button style={{ backgroundColor: "#5947ff", color: "white" }}>
        {" "}
        비교해봐요!!
      </button>
      <button style={{ backgroundColor: "#9147ff", color: "white" }}>
        {" "}
        비교해봐요!!
      </button>
    </div>
  );
};
export default Login;
