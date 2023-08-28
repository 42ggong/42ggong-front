import styled from "@emotion/styled";

export const RoutButtonContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RoutButton = styled.button`
  padding: 30px 30px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
