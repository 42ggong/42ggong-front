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

// 폐기가능리스트
export function getExpiredItemList(accessToken) {
  return axios
    .get(`/api/v1/items?isExpired=true&keepStatus=KEEP`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

//
export function getItemHistoryList(data) {
  return axios
    .get(`/api/v1/item-histories?page=${data.page}`, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

// 냉장고 현황
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
