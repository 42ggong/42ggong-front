import styled from "@emotion/styled";

export const RoutButtonContainer = styled.div`
  // width: 90px;
  min-width: 200px;
  max-width: 50px;
  height: calc(100% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const RoutButton = styled.button`
  padding: 30px 30px;
  font-size: 18px;
  background-color: #5947ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  height: 20%;
  padding: 20px;
  margin: 10px auto;
  &:hover {
    background-color: #478eff;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
