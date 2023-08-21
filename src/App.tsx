import React from "react";
import Main from "./pages/main/index";
import Store from "./pages/store/index";
import StatusAndLog from "./pages/statusAndLog/index";
import MyList from "./pages/myList/index";
import Discard from "./pages/discard/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  const a = true;
  return (
    <>
      <RecoilRoot>{a ? <PrivateRouter /> : <PublicRouter />}</RecoilRoot>
    </>
  );
}

function PrivateRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PrivateLayout />}> */}
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/status" element={<StatusAndLog />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/discard" element={<Discard />} />
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route index element={<Login />} /> */}
        {/* <Route path="/login/*" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/expire" element={<Expire />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/*" element={<Error />} />
          <Route path="/item/edit" element={<ItemEdit />} />
          <Route path="/item/add" element={<ItemAdd />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
