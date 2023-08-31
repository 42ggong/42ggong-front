// useToken.js
import { useRecoilState } from "recoil";
import { accessTokenState } from "../api/atom"; // assume this is your Recoil atom

export function useAccessToken() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const updateToken = (newToken: any) => {
    setAccessToken(newToken);
  };

  return { accessToken, updateToken };
}
