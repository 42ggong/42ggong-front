import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledNavBar, UserNameContainer } from "./style";
import HomeButton from "components/HomeButton";
interface Iprops {
  userName: string;
}

const NavBar = ({ userName }: Iprops) => {
  const navigate = useNavigate();
  console.log("??", userName);
  return (
    <StyledNavBar>
      <HomeButton />
      <UserNameContainer>{`${userName}님과 함께 꽁!`}</UserNameContainer>
    </StyledNavBar>
  );
};

export default NavBar;
