import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
  background-color: #478eff;
`;

export const LoginContainer = styled.div`
  height: 90%;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  background-color: #ffffff;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  border: none;
  background-color: #5947ff;
  color: #ffffff;
  width: 140px;
  height: 70px;
  font-size: 1.125rem;
  text-align: center;
  font-family: var(--main-font);
  border-radius: 6px;
  font-weight: 300;
  -webkit-tap-highlight-color: transparent;
  place-items: center;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  // object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  // margin-top: 10vh;
  // height: 10%;
`;
export const Line = styled.hr`
  width: 60%;
  max-width: 600px;
  margin: 20px 0px;
  border: 0.5px solid #478eff;
`;

export const JoinUs = styled.span`
  position: fixed;
  background-color: white;
  padding: 10px 10px;
  font-size: 1rem;
  line-height: 20px;
`;

export const LogoText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #9147ff;
`;
