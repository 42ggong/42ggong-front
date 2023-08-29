import styled from "@emotion/styled";

export const RoutButtonContainer = styled.div`
  width: 90px;
  min-width: 200px;
  height: 10%;
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
  height: 80px
  padding: 20px;
  margin: 10px auto;
  &:hover {
    background-color: #478eff;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
