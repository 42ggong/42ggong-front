import styled from "@emotion/styled";

export const StorePageContainer = styled.div`
  padding: 20px;
  height: calc(100% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin 0 auto;
`;

export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border: solid;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  align-items: center;
  margin: 0 auto;
`;

export const InfromTitle = styled.h1`
  margin-bottom: 20px;
`;

export const InfromTextContainer = styled.div`
  // height: 80%;
  // justify-content: space-between;
`;

export const InfromText = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;

export const Line = styled.hr`
  width: 85%;
  max-width: 600px;

  border: 1.5px solid #478eff;
`;

export const ItemInfoInputContainer = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  // border: solid;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
`;

export const ItemInfoInputLabel = styled.label``;

export const ItemInfoInput = styled.input`
  height: 70px;
  width: 75%;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  border: 2px solid #5947ff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  // border: solid;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;
`;

export const SubmitButton = styled.button`
  width: 40%;
  height: 80%;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  background: #5947ff;
  &:hover {
    background-color: #478eff;
  }
`;

export const CancleButton = styled.button`
  width: 40%;
  height: 80%;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  background: #8447ff;
  &:hover {
    background-color: #ff478a;
  }
`;
