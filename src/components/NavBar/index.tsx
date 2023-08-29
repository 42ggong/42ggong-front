import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledNavBar } from "./style";
import HomeButton from "components/HomeButton";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavBar>
      <HomeButton />
    </StyledNavBar>
  );
};

export default NavBar;
