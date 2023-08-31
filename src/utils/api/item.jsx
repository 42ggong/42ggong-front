import axios from "axios";

export function postItem(storeData) {
  console.log("form", storeData);
  return axios
    .post(
      `/api/v1/items`,
      { description: storeData.description },
      {
        headers: {
          Authorization: `Bearer ${storeData.accessToken}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
