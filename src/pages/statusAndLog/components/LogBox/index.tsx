import React, { useState, useEffect } from "react";
import * as S from "../../style";
import Modal from "../../../../components/Modal/index";
import useInput from "../../../../utils/hooks/useInput";

const dummyList = [
  {
    uid: "123123",
    time: "08-21",
    info: "사과",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123124",
    time: "08-22",
    info: "배",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123125",
    time: "08-24",
    info: "두리안",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
  {
    uid: "123126",
    time: "08-24",
    info: "오스트랄로피테쿠스",
    action: "폐기",
    intra: "hyopark",
  },
];

const ReDiscardBoxForm = () => {
  return (
    <>
      <S.ListBoxForm>
        <S.ListItemBorder style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          <S.ListItemColumn>식별자</S.ListItemColumn>
          <S.ListItemColumn>시간</S.ListItemColumn>
          <S.ListItemColumn>설명</S.ListItemColumn>
          <S.ListItemColumn>행동</S.ListItemColumn>
          <S.ListItemColumn>intra</S.ListItemColumn>
        </S.ListItemBorder>
        {dummyList.map((element: any, index: number) => {
          return (
            <S.ListItemBorder key={element.uid}>
              <S.ListItemColumn>{element.uid}</S.ListItemColumn>
              <S.ListItemColumn>{element.time}</S.ListItemColumn>
              <S.ListItemColumn>{element.info}</S.ListItemColumn>
              <S.ListItemColumn>{element.action}</S.ListItemColumn>
              <S.ListItemColumn>{element.intra}</S.ListItemColumn>
            </S.ListItemBorder>
          );
        })}
      </S.ListBoxForm>
    </>
  );
};

export default ReDiscardBoxForm;
