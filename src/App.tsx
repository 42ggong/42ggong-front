import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { accessTokenState } from "./utils/api/atom";
import axios from "axios";
import Main from "./pages/main/index";
import Store from "./pages/store/index";
import StatusAndLog from "./pages/statusAndLog/index";
import MyList from "./pages/myList/index";
import Discard from "./pages/discard/index";
import Login from "./pages/login/index";
import Error from "./pages/error/index";
import Layout from "./layout/index";

function App() {
  return (
    <RecoilRoot>
      <Routing />
    </RecoilRoot>
  );
}

const refreshToken = async (setAccessToken: any) => {
  // 엑세스가 없으면 리프레쉬 시도해보고 리프레쉬성공하면 set 하고 실패하면 null set하고 리프레쉬 토큰도 초기화해버리기
  // if (document.cookie)
  try {
    await axios.post("/refresh").then((re) => {
      setAccessToken(re);
    });
  } catch (e) {
    //
  }
};

function Routing() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!accessToken) refreshToken(setAccessToken);
  }, [accessToken]);
  console.log("accessToken", accessToken);
  return accessToken ? <PrivateRouter /> : <PublicRouter />;
}

function PrivateRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/status" element={<StatusAndLog />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/discard" element={<Discard />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
