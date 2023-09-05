import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getItemHistoryList } from "../../../../utils/api/item";
import { useAccessToken } from "../../../../utils/hooks/useAccessToekn";

const today =
  new Date().toISOString().slice(5, 7) + new Date().toISOString().slice(8, 10);

const LogBox = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const accessToken = useAccessToken();
  const userQuery = useQuery({
    queryKey: ["allItemList"],
    queryFn: () => {
      return getItemHistoryList({
        page: page,
        accessToken: accessToken.accessToken,
      });
    },
  });
  // let totalPage = userQuery.data?.totalPage;
  const [totalpage, setTotalPage] = useState(
    Array.from({ length: 10 }, (_, index) => {
      console.log("idididi", index, userQuery.data?.totalPage);
      if (userQuery.data?.totalPage >= index + 1) return true;
      return false;
    })
  );
  console.log("totalpage", totalpage);
  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));
  useEffect(() => {
    userQuery.refetch();
    Array.from({ length: 10 }, (_, index) => {
      if (userQuery.data?.totalPage >= index + 1) return true;
      return false;
    });
  }, [userQuery, page]);

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const generateStatus = (status: string) => {
    switch (status) {
      case "PULLOUT":
        return "찾음";
        break;
      case "KEEP":
        return "보관";
        break;
      case "DISUSED":
        return "폐기";
        break;
      default:
        break;
    }
    return status;
  };
  // const countChecked = () => {
  //   return checkedArr.filter((element) => element === true).length;
  // };

  const onSubmit = () => {
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  // TODO: 관리자 인트리아이디 쇼 옵션
  return (
    <>
      <S.ListBoxForm>
        <S.ListContainer>
          <S.ListItemContainer style={{ backgroundColor: "#6c5cff" }}>
            <S.ListItemColumn style={{ width: "10px" }} />
            <S.ListItemColumn style={{ width: "60px" }}>
              식별자
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "60px" }}>시간</S.ListItemColumn>
            <S.ListItemColumn style={{ width: "100px" }}>
              intra
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "55px" }}>상태</S.ListItemColumn>
          </S.ListItemContainer>
          {userQuery.data?.itemHistoryList.length > 0 ? (
            <S.ListRows>
              {userQuery.data?.itemHistoryList.map(
                (element: any, index: number) => {
                  return (
                    <S.ListItemContainer
                      style={{ margin: "5px auto" }}
                      key={`${page}page${element.keepIdentifier}${element.keepStatus}${element.recordedDate}`}
                    >
                      <S.ListItemColumn style={{ width: "10px" }} />
                      <S.ListItemColumn style={{ width: "60px" }}>
                        {element.keepIdentifier}
                      </S.ListItemColumn>
                      <S.ListItemColumn style={{ width: "60px" }}>
                        {element.recordedDate.slice(11, 16)}
                      </S.ListItemColumn>
                      <S.ListItemColumn style={{ width: "100px" }}>
                        {element.username !== null
                          ? element.username
                          : "관리자용"}
                      </S.ListItemColumn>
                      <S.ListItemColumn style={{ width: "55px" }}>
                        {generateStatus(element.keepStatus)}
                        {/* {generateButton(element, index)} */}
                      </S.ListItemColumn>
                    </S.ListItemContainer>
                  );
                }
              )}
            </S.ListRows>
          ) : (
            <h1>앗 아무고토 없어요!!</h1>
          )}
        </S.ListContainer>
        <S.PageButtonContainer>
          {totalpage.map((ele, i) => {
            return (
              <S.PageButton
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(i);
                }}
                disabled={!ele}
                style={{ background: page === i ? "#478eff" : "" }}
              >
                {i + 1}
              </S.PageButton>
            );
          })}
        </S.PageButtonContainer>
      </S.ListBoxForm>
      {showModal && (
        <Modal
          handleClose={onCloseModal}
          handleSubmit={onSubmit}
          text={modalText}
        />
      )}
    </>
  );
};

export default LogBox;
