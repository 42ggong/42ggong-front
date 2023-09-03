import React, { useState, useCallback } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/index";
import useInput from "../../utils/hooks/useInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postItem } from "../../utils/api/item";
import { useAccessToken } from "../../utils/hooks/useAccessToekn";

const Store = () => {
  const navigate = useNavigate();
  const accessToken = useAccessToken();
  const queryClient = useQueryClient();
  const [labelData, setLabelData] = useState("");
  const itemStoreMutation = useMutation({
    mutationFn: postItem,
    // onSuccess: () => {},
    onSuccess: async (res) => {
      setLabelData(`${res.keepIdentifier} ${res.keepExpiryDate}`);
      console.log("tet", `${res.keepIdentifier} ${res.keepExpiryDate}`);
      // alert(`${res.keepIdentifier} ${res.keepExpiryDate} 라벨링하세요`);
    },
    //   await queryClient.refetchQueries([`${item.category}`, "list"]);
    //   navigate("/item", { state: { item: res.id, category: item.category } });
    // },
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
      // console.log("Tet!2", storeData);
      setBriefInfo("");
      setShowModal(false);
      // navigate("/");
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
          {labelData === "" ? (
            <>
              <S.InfromText>보관품에대한 간단한 설명 작성</S.InfromText>
              <S.InfromText>42ggong을 이용하여 라벨생성</S.InfromText>
              <S.InfromText>생성된 라벨을 보관품에 부착</S.InfromText>
            </>
          ) : (
            <>
              <S.InfromText>반드시 아래의 라벨 10자리를</S.InfromText>
              <S.InfromText> 보관품에 부착하여 보관해주세요!</S.InfromText>
            </>
          )}
          <S.InfromText>라벨을 붙이지 않으면</S.InfromText>
          <S.InfromText>언제든 폐기될수있어요!</S.InfromText>
        </S.InfromTextContainer>
      </S.InformContainer>
      <S.Line />
      <S.ItemInfoInputContainer>
        <S.ItemInfoInputLabel>
          보관품에대해 간단한 설명을 남겨보아요!
        </S.ItemInfoInputLabel>
        {labelData === "" ? (
          <S.ItemInfoInput
            onChange={onBrieftInfo}
            minLength={0}
            maxLength={6}
          />
        ) : (
          <S.ItemInfoBox>{labelData}</S.ItemInfoBox>
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
            text="안녕 난 모달"
          />
        )}
      </form>
    </S.StorePageContainer>
  );
};

export default Store;
