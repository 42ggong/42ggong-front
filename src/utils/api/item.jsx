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

export async function searchItem(searchData) {
  return axios
    .get(`/api/v1/items/identifier/${searchData.keepIdentifier}`, {
      headers: {
        Authorization: `Bearer ${searchData.accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function getMyItemList(accessToken) {
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

export function getExpiredItemList(accessToken) {
  return axios
    .get(`/api/v1/items?isExpired=true`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function getAllItemList(accessToken) {
  return axios
    .get(`/api/v1/items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function getCurrItemList(accessToken) {
  return axios
    .get(`/api/v1/items?keepStatus=KEEP`, {
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
