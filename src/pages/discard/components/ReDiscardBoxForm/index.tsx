import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";
import useInput from "../../../../utils/hooks/useInput";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { searchItem, pullOutItems } from "../../../../utils/api/item";
import { useAccessToken } from "../../../../utils/hooks/useAccessToekn";

const today =
  new Date().toISOString().slice(5, 7) + new Date().toISOString().slice(8, 10);

const ReDiscardBoxForm = () => {
  // const queryClient = useQueryClient();
  const accessToken = useAccessToken();
  const itemsPullOutMutation = useMutation({
    mutationFn: pullOutItems,
  });
  const [reDiscardArr, setReDiscardArr] = useState<any[]>([]);
  const [searchUid, onSearchUid, setSearchUid] = useInput("");
  // const userQuery = useQuery({
  //   queryKey: ["searchItem", searchUid],
  //   queryFn: () => {
  //     return searchItem({
  //       keepIdentifier: searchUid,
  //       accessToken: accessToken.accessToken,
  //     });
  //   },
  // });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // api 후 처리
    try {
      if (
        searchUid &&
        searchUid.trim() &&
        reDiscardArr.filter((e) => e.keepIdentifier === searchUid).length === 0
      ) {
        searchItem({
          keepIdentifier: searchUid,
          accessToken: accessToken.accessToken,
        }).then((res) => {
          console.log("상태코드!!");
          if (!res) {
            setModalText("없는 식별자예요.. ㅜㅜ");
            setShowModal(true);
          } else {
            console.log(res);
            setReDiscardArr([
              ...reDiscardArr,
              {
                keepIdentifier: res.keepIdentifier,
                keepExpiryDate: res.keepExpiryDate,
                description: res.description,
              },
            ]);
          }
        });
      }
    } catch (e: any) {
      console.error(e.message);
      // 에러 처리
    }
    console.log(searchUid);
    // 배열에 추가하기전에 중복검사 필요

    setSearchUid("");
  };

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const countRediscard = () => {
    return reDiscardArr.length;
  };

  const onSubmit = () => {
    const pullOutData: any[] = [];

    reDiscardArr.forEach((ele) => {
      pullOutData.push(ele.keepIdentifier);
    });
    itemsPullOutMutation.mutate({
      keepIdentifierList: pullOutData,
      accessToken: accessToken.accessToken,
    });

    setReDiscardArr([]);
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  const onReDiscard = (e: any) => {
    e.preventDefault();
    const rediscardLength = countRediscard();
    setModalText(`총 ${rediscardLength}개의 보관품을
	  처리를 합니다.
	  반드시 냉장고에서
	  꺼낸 후에 완료해주세요!
	  `);
    setShowModal(true);
  };

  return (
    <>
      <S.ListBoxForm>
        <S.ReDiscardListContainer>
          <S.ListItemContainer style={{ backgroundColor: "#6c5cff" }}>
            <S.ListItemCheckBoxContainer />
            <S.ListItemColumn style={{ width: "60px" }}>
              식별자
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "60px" }}>
              유효기간
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "100px" }}>설명</S.ListItemColumn>
            <S.ListItemColumn style={{ width: "55px" }}> </S.ListItemColumn>
          </S.ListItemContainer>
          <S.ReDiscardListRows>
            {reDiscardArr.map((element: any, index: number) => {
              return (
                <S.ListItemContainer
                  style={{ margin: "5px auto" }}
                  key={element.keepIdentifier}
                >
                  <S.ListItemCheckBoxContainer />
                  <S.ListItemColumn style={{ width: "60px" }}>
                    {element.keepIdentifier}
                  </S.ListItemColumn>
                  <S.ListItemColumn style={{ width: "60px" }}>
                    {element.keepExpiryDate}
                  </S.ListItemColumn>
                  <S.ListItemColumn style={{ width: "100px" }}>
                    {element.description}
                  </S.ListItemColumn>
                  <S.ListItemColumn style={{ width: "55px" }}>
                    <S.DiscardButton
                      tabIndex={-1}
                      onClick={(e) => {
                        e.preventDefault();
                        const tmpArr = reDiscardArr.filter(
                          (ele, idx) => idx !== index
                        );
                        setReDiscardArr(tmpArr);
                      }}
                    >
                      x
                    </S.DiscardButton>
                  </S.ListItemColumn>
                </S.ListItemContainer>
              );
            })}
          </S.ReDiscardListRows>
        </S.ReDiscardListContainer>
        <S.SearchContainer>
          <S.SearchInput
            value={searchUid}
            tabIndex={-1}
            onChange={onSearchUid}
            minLength={0}
            maxLength={6}
          />
          <S.SearchButton type="submit" tabIndex={-1} onClick={handleSubmit}>
            검색 후 추가
          </S.SearchButton>
        </S.SearchContainer>
        <S.ListFormButtonContianer>
          <S.ListFormButton
            onClick={onReDiscard}
            tabIndex={-1}
            disabled={countRediscard() < 1}
          >
            전체 처리
          </S.ListFormButton>
        </S.ListFormButtonContianer>
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

export default ReDiscardBoxForm;
