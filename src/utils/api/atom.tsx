import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken", // 고유한 ID
  default: "", // 초기 값
});
