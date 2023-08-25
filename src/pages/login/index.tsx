import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../utils/api/atom";

const Login = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log("accessToken", accessToken);
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        try {
          await axios.get("/login").then((re: any) => {
            setAccessToken("a");
            console.log("a");
          });
        } catch (e) {
          setAccessToken("b");
          console.log("b");
        }
      }}
    >
      로그인
    </button>
  );
};
export default Login;
