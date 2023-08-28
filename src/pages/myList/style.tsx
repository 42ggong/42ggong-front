import styled from "@emotion/styled";

// inform
export const InformContainer = styled.div``;

// list box
export const ListBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListBoxBorder = styled.div`
  border: 1px solid;
`;

export const ListBoxButtonContainer = styled.div``;

export const ListBoxForm = styled.form`
  width: 85%;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
`;

// list item
export const ListItemBorder = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
`;

export const ListItemCheckBox = styled.input`
  // position: relative;
  // top: 5.5px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  align-items: center;
  :checked {
    background: green;
    border: none;
  }
`;

export const ListItemColumn = styled.div`
  width: 100px;
  border: 1px solid;
`;
