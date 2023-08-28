import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHomeButton } from "./style";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <StyledHomeButton
      onClick={() => {
        navigate("/");
      }}
    >
      홈
    </StyledHomeButton>
  );
};

export default HomeButton;
