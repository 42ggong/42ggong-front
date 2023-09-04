import React, { useState, useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/index";
import useInput from "../../utils/hooks/useInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postItem } from "../../utils/api/item";
import { useAccessToken } from "../../utils/hooks/useAccessToekn";
// TODO: 리액트쿼리 mutate ->  myList : 보관하면 리스트도 업데이트해서 유저경험 향상
const Store = () => {
  const navigate = useNavigate();
  const accessToken = useAccessToken();
  const queryClient = useQueryClient();
  const [labelData, setLabelData] = useState("");
  const itemStoreMutation = useMutation({
    mutationFn: postItem,
    onSuccess: async (res) => {
      setLabelData(`${res.keepIdentifier} ${res.keepExpiryDate}`);
      console.log("tet", `${res.keepIdentifier} ${res.keepExpiryDate}`);
    },
  });
  const [showModal, setShowModal] = useState(false);
  const [briefInfo, onBrieftInfo, setBriefInfo] = useInput("");

  console.log("Tet", briefInfo);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleCancle = useCallback(() => {
    navigate("/");
  }, [accessToken, briefInfo]);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      // console.log("입력값 체크함수");
      // console.log("체크 되면 백엔드에 요청");
      // console.log("결과를 모달로 안내함 (라벨링 안내 [버튼은 홈, 추가 보관]) ");
      // console.log("Tet!");
      // const storeFormData = new FormData();
      // storeFormData.append("accessToken", accessToken.accessToken);
      // storeFormData.append("description", briefInfo);
      console.log("briefInfo", briefInfo);
      const storeData = {
        accessToken: accessToken.accessToken,
        description: briefInfo,
      };
      itemStoreMutation.mutate(storeData);
      setBriefInfo("");
      setShowModal(false);
    },
    [accessToken, briefInfo]
  );

  return (
    <S.StorePageContainer>
      <S.InformContainer>
        <S.InfromTitle>
          {labelData === "" ? "보관안내" : "보관완료"}
        </S.InfromTitle>
        <S.InfromTextContainer>
          <div style={{ marginBottom: "17px" }}>
            {labelData === "" ? (
              <>
                <S.InfromText>☝🏼 보관품에대한 간단한 설명 작성</S.InfromText>
                <S.InfromText>✌🏼 보관 버튼을 눌러 라벨 생성</S.InfromText>
                <S.InfromText>🤟🏼 생성된 라벨을 보관품에 부착</S.InfromText>
              </>
            ) : (
              <>
                <S.InfromText>반드시 아래의 라벨 10자리를</S.InfromText>
                <S.InfromText> 보관품에 부착하여 보관해주세요!</S.InfromText>
              </>
            )}
          </div>
          <S.WarnText>
            주의! 라벨을 붙이지 않으면 언제든 폐기될수있어요!
          </S.WarnText>
          {/* <S.WarnText>언제든 폐기될수있어요!</S.WarnText> */}
        </S.InfromTextContainer>
      </S.InformContainer>
      <S.Line />
      <S.ItemInfoInputContainer>
        <S.ItemInfoInputLabel>
          {labelData === ""
            ? "보관품에대해 간단한 설명을 남겨보아요!"
            : "생성된 라벨 10자리"}
        </S.ItemInfoInputLabel>
        {labelData === "" ? (
          <S.ItemInfoInput
            onChange={onBrieftInfo}
            minLength={0}
            maxLength={6}
          />
        ) : (
          <S.ItemInfoBox>
            <S.ItemInfoInputLabel>{labelData}</S.ItemInfoInputLabel>
          </S.ItemInfoBox>
        )}
        <div
          style={{ color: "gray", marginLeft: "65%" }}
        >{`${briefInfo.length}/6`}</div>
      </S.ItemInfoInputContainer>
      <S.Line />
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log("submmmit");
        }}
      >
        <S.ButtonContainer>
          <S.CancleButton type={"reset"} onClick={handleCancle}>
            {labelData === "" ? "취소" : "나가기"}
          </S.CancleButton>
          <S.SubmitButton
            type="button"
            onClick={(e: any) => {
              e.preventDefault();
              if (labelData === "") setShowModal(true);
              else setLabelData("");
            }}
            tabIndex={-1}
          >
            {labelData === "" ? "보관" : "더 보관하기"}
          </S.SubmitButton>
        </S.ButtonContainer>
        {showModal && (
          <Modal
            handleClose={onCloseModal}
            handleSubmit={handleSubmit}
            text="보관기간은 기본 2일이며, 누군가 나 대신 폐기를 3번이상 해주었으면 1일로 줄어들어요"
          />
        )}
      </form>
    </S.StorePageContainer>
  );
};

export default Store;
