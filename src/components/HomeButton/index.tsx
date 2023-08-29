import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHomeButton } from "./style";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <StyledHomeButton
      src="/img/42ggongLogo.png"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default HomeButton;
