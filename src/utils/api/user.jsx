// import axios from "./axiosInstance";
import axios from "axios";

export function getUser(accessToken) {
  return axios
    .get(`/api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}
