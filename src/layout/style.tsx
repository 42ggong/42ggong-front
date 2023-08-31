import styled from "@emotion/styled";
export const BackGroundContainer = styled.div`
  background: #282733;
  height: 100%;
  width: 100%;
`;

export const LayoutContainer = styled.div`
  background: #282733;
  //   padding: 0;
  font-weight: 400;
  height: 100%;
  margin: 0 auto;
  max-width: 425px;
`;

export const LayoutRect = styled.div`
  background: #ffffff;
  border-radius: 40px;
  position: relative;
  height: calc(100% - 100px);
  width: calc(100% - 50px);
  min-width: 320px;
  min-height: 500px;
  max-height: 750px;
  margin: 0 auto;
`;

export const LayoutLine = styled.div`
  position: absolute;
  justifycontent: center;
  alignitems: center;
  width: 100%;
  height: calc((100% - 100px) / 2);
  border-bottom: 1px solid #ccc;
  z-index: 0;
`;

export const LayoutCircle = styled.div`
  display: flex;
  justifycontent: center;
  alignitems: center;
  height: calc((100% - 100px) / 2);
  borderbottom: 1px solid #ccc;
`;
