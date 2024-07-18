import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Logo from "../components/Logo";
import Home from "../pages/Home";
import LookPost from "../pages/LookPost";

const GlobalStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  position: fixed;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: black;

  backdrop-filter: blur(5px);
`;

function TopStyle() {
  const [distinguish, setDistinguish] = useState<string>();

  function postLink(start: number, n: number) {
    const arr = [];
    for (let k = start; k < start + n; k++) {
      arr.push(
        <Route
          path={`/posts/${k}`}
          element={
            <LookPost setDistinguish={setDistinguish} postId={k} key={k} />
          }
          key={k + 100}
        />,
      );
    }
    return arr;
  }

  return (
    <GlobalStyle>
      <Top>
        <Logo distinguish={distinguish} />
      </Top>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setDistinguish={setDistinguish} />} />
          {postLink(1, 100)}
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default TopStyle;
