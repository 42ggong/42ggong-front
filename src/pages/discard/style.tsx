import styled from "@emotion/styled";

// page
export const DiscardPageContainer = styled.div`
  padding: 20px;
  height: calc(100% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin 0 auto;
`;

// inform
export const InformContainer = styled.div`
  // border: solid;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  min-height: 120px;
  // min-height: calc(30% - 35px);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: auto;
`;
//  overflow: auto; 임시로..

// menuButton
export const MenuButtonContainer = styled.div`
  // height: 5%;
  // max-height: 35px;
  height: 35px;
`;

export const MenuButton = styled.button`
  border: none;
  margin-top: 5px;
  margin-right: 2px;
  width: 32%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  color: white;
`;

// list box
export const ListBoxContainer = styled.div`
  // border: solid;
  display: flex;
  height: 600px;
  min-height: 300px;
  flex-direction: column;
  // border: solid;
  width: 100%;
  border-radius: 20px;
  align-items: center;

  margin: 10px auto;
`;

// export const ListBoxBorder = styled.div`
//   border: 1px solid;
// `;

// export const ListItemColumnTitle = styled.div`
//   border-radius: 15px;
// `;

export const ListBoxForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  margin: 5px auto;
  height: 100%;
`;

export const ListContainer = styled.div`
  height: 540px;
  min-height: 240px;
  // height: calc(100% - 60px);
  // min-height: calc(100% - 60px);
  // max-height: calc(100% - 60px);
  // overflow: auto;
`;

export const ReDiscardListContainer = styled.div`
  height: 490px;
  min-height: 190px;
  // height: calc(100% - 110px);
  // min-height: calc(100% - 110px);
  // max-height: calc(100% - 110px);
  // overflow: auto;
`;

export const ListRows = styled.div`
  height: calc(100% - 60px);

  overflow: auto;
`;

export const ReDiscardListRows = styled.div`
  height: calc(100% - 60px);
  overflow: auto;
`;

export const Line = styled.hr`
  width: 85%;
  max-width: 600px;

  border: 1.5px solid #478eff;
`;

// list item
export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // border: 1px solid;
  border-radius: 15px;
  background: #b6adff;
  box-shadow: 2px 2px 4px #c7c2f0;
  // margin: 10px auto;
  // overflow: auto;
`;

export const ListItemCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`;
export const ListItemCheckBox = styled.input`
  // position: relative;
  // margin: 0 auto;
  top: 5.5px;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  background: #bdb5ff;
  :checked {
    background: #5947ff;
    border: none;
  }
`;

export const ListItemColumn = styled.div`
  width: 100%;
  height: 50px;
  // border: 1px solid;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const PullButton = styled.button`
  // width: 100%;
  // height: 60px;
  border: none;
  border-radius: 5px;
  color: white;
  height: 30px;
  width: 40px;
  background: #5947ff;
  &:hover {
    background-color: #478eff;
  }
`;

export const DiscardButton = styled.button`
  // width: 100%;
  // height: 60px;
  border: none;
  border-radius: 5px;
  color: white;
  height: 30px;
  width: 40px;
  background: #8447ff;
  &:hover {
    background-color: #ff478a;
  }
`;

export const ListFormButtonContianer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListFormButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  // margin-left: 70%;
  border-radius: 20px;
  color: white;
  background: #6c5cff;
  :disabled {
    background: #c6c3eb;
  }
  &:hover {
    background-color: #478eff;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 30px;
  text-align: center;
  border: 2px solid #5947ff;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  // margin-left: 70%;
  border-radius: 20px;
  color: white;
  background: #6c5cff;
  :disabled {
    background: #c6c3eb;
  }
  &:hover {
    background-color: #478eff;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
