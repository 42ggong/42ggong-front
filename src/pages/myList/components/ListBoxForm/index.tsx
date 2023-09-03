import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getMyItemList, pullOutItems } from "../../../../utils/api/item";
import { useAccessToken } from "../../../../utils/hooks/useAccessToekn";

const today = new Date().toISOString().slice(5, 10);

const ListBoxForm = () => {
  const queryClient = useQueryClient();
  const accessToken = useAccessToken();
  const userQuery = useQuery({
    queryKey: ["myList"],
    queryFn: () => {
      return getMyItemList(accessToken.accessToken);
    },
  });
  const itemsPullOutMutation = useMutation({
    mutationFn: pullOutItems,
    // onSuccess: async (res) => {
    //   console.log("pull out 200");
    // },
  });
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [checkedArr, setCheckedArr] = useState(
    Array.from({ length: userQuery.data?.length }, () => false)
  );
  const [deleteArr, setDeleteArr] = useState(
    Array.from({ length: userQuery.data?.length }, () => false)
  );

  if (userQuery.isError) console.log(JSON.stringify(userQuery.error));
  useEffect(() => {
    userQuery.refetch();
  }, [userQuery]);

  useEffect(() => {
    if (checkedArr.length < 1) setAllChecked(false);
    else if (checkedArr.indexOf(false) === -1) setAllChecked(true);
    else setAllChecked(false);
  }, [checkedArr]);

  const setCheckedArrByIndex = (index: any) => {
    const tmpArr = [...checkedArr];
    tmpArr[index] = !checkedArr[index];
    setCheckedArr(tmpArr);
  };

  const setDeleteArrByIndex = (index: any) => {
    const tmpArr = Array.from({ length: userQuery.data?.length }, () => false);
    tmpArr[index] = true;
    setDeleteArr(tmpArr);
  };

  const generateButton = (listElement: any, index: any) => {
    if (listElement.keepExpiryDate > today)
      return (
        <S.PullButton
          onClick={(e) => {
            e.preventDefault();
            setModalText(
              `${listElement.keepIdentifier} ${listElement.description} 를 처리합니다.
				반드시 냉장고에서
				꺼낸 후에 완료해주세요!`
            );
            setDeleteArrByIndex(index);
            setShowModal(true);
          }}
          tabIndex={-1}
        >
          찾기
        </S.PullButton>
      );
    return (
      <S.DiscardButton
        onClick={(e) => {
          e.preventDefault();
          setModalText(
            `${listElement.keepIdentifier} ${listElement.description} 를 처리합니다.
			  반드시 냉장고에서
			  꺼낸 후에 완료해주세요!`
          );
          // TODO 선택 누루고 폐기 누르면 에러 -> 단일 모달을 따로 처리할 방법 생각
          // setCheckedArrByIndex(index);
          setDeleteArrByIndex(index);
          setShowModal(true);
        }}
        tabIndex={-1}
      >
        폐기
      </S.DiscardButton>
    );
  };
  const countChecked = () => {
    return checkedArr.filter((element) => element === true).length;
  };

  const onSubmit = () => {
    const pullOutData: any[] = [];

    deleteArr.forEach((shouldDelete, idx) => {
      if (shouldDelete) {
        pullOutData.push(userQuery.data[idx].keepIdentifier);
      }
    });
    itemsPullOutMutation.mutate({
      keepIdentifierList: pullOutData,
      accessToken: accessToken.accessToken,
    });
    setCheckedArr(Array.from({ length: userQuery.data?.length }, () => false));
    setDeleteArr(Array.from({ length: userQuery.data?.length }, () => false));
    setModalText("");
    setShowModal(false);
  };

  const onCloseModal = () => {
    setModalText("");
    setShowModal(false);
  };

  const onMultiDiscard = (e: any) => {
    e.preventDefault();
    const checkedLength = countChecked();
    setModalText(`총 ${checkedLength}개의 보관품을
	  처리를 합니다.
	  반드시 냉장고에서
	  꺼낸 후에 완료해주세요!
	  `);
    setDeleteArr(checkedArr);
    setShowModal(true);
  };

  if (!userQuery.data) return <>로딩중</>;
  return (
    <>
      <S.ListBoxForm>
        <S.ListContainer>
          {/* <S.ListItemColumnTitle> */}
          <S.ListItemContainer style={{ backgroundColor: "#6c5cff" }}>
            <S.ListItemCheckBoxContainer>
              <S.ListItemCheckBox
                type="checkbox"
                checked={allChecked}
                tabIndex={-1}
                onChange={() => {
                  if (checkedArr.indexOf(false) === -1) {
                    setAllChecked(false);
                    setCheckedArr(
                      Array.from(
                        { length: userQuery.data?.length },
                        () => false
                      )
                    );
                  } else {
                    setAllChecked(true);
                    setCheckedArr(
                      Array.from({ length: userQuery.data?.length }, () => true)
                    );
                  }
                }}
              />
            </S.ListItemCheckBoxContainer>
            <S.ListItemColumn style={{ width: "60px" }}>
              식별자
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "60px" }}>
              유효기간
            </S.ListItemColumn>
            <S.ListItemColumn style={{ width: "100px" }}>설명</S.ListItemColumn>
            <S.ListItemColumn style={{ width: "55px" }}> </S.ListItemColumn>
          </S.ListItemContainer>
          {userQuery.data?.length > 0 ? (
            <S.ListRows>
              {userQuery.data?.map((element: any, index: number) => {
                return (
                  <S.ListItemContainer
                    style={{ margin: "5px auto" }}
                    key={element.keepIdentifier}
                  >
                    <S.ListItemCheckBoxContainer>
                      <S.ListItemCheckBox
                        type="checkbox"
                        checked={checkedArr[index]}
                        tabIndex={-1}
                        onChange={() => {
                          setCheckedArrByIndex(index);
                        }}
                      />
                    </S.ListItemCheckBoxContainer>
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
                      {generateButton(element, index)}
                    </S.ListItemColumn>
                  </S.ListItemContainer>
                );
              })}
            </S.ListRows>
          ) : (
            <h1>앗 아무고토 없어요!!</h1>
          )}
        </S.ListContainer>
        <S.ListFormButtonContianer>
          <S.ListFormButton
            onClick={onMultiDiscard}
            disabled={countChecked() < 1}
            tabIndex={-1}
          >
            선택 처리
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

export default ListBoxForm;
