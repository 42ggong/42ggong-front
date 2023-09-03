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

export function getMyItemList(accessToken) {
  console.log("accessToken!!", accessToken);
  return axios
    .get(`/api/v1/users/me/items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function pullOutItems(pullOutData) {
  console.log("accessToken!!", pullOutData, pullOutData.accessToken);
  return axios
    .put(
      `/api/v1/items/pullout`,
      {
        keepIdentifierList: pullOutData.keepIdentifierList,
      },
      {
        headers: {
          Authorization: `Bearer ${pullOutData.accessToken}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
