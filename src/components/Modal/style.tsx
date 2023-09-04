import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 350px;
  height: 200px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #c6c3eb;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ModalTextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const ModalButtonContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;

  margin: 0px 40px;
`;

export const Modal = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1022;
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  height: 40px;
  width: 80px;
  background: #5947ff;
  &:hover {
    background-color: #478eff;
  }
`;

export const CancleButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  height: 40px;
  width: 80px;
  background: #8447ff;
  &:hover {
    background-color: #ff478a;
  }
`;
