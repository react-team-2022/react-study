import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

/* pages */
import Chu from "./pages/Chu";
import Daeguk from "./pages/Daeguk";
import G1 from "./pages/G1";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Page from "./Page";

function App() {
  const members = [
    {
      id: 0,
      memberName: "HOME",
      path: "",
    },
    {
      id: 1,
      memberName: "추홍규",
      path: "chu",
    },
    {
      id: 2,
      memberName: "강대국",
      path: "daeguk",
    },
    {
      id: 3,
      memberName: "민지원",
      path: "g1",
    },
  ];

  const homeworks = [
    {
      id: 1,
      title: "5/27 과제 - 각자의 페이지 리액트로 만들기",
      description: [
        "react-router-dom을 이용해 페이지마다 url설정",
        "header등의 간단한 컴포넌트 만들기",
      ],
      active: true,
    },
    {
      id: 2,
      title: "5/29 과제 - 홈화면에 헤더 꾸미기",
      description: [
        "props를 통해 컴포넌트에게 값 전달하기",
        "Styled-components 사용해보기",
        "Header 는 Props로 Title(String), Description(String), Active(Boolean), Id(Number)를 가진다.",
      ],
      active: true,
    },
    {
      id: 3,
      title: "6/3 과제 - InputSample.js 따라하기",
      description: ["InputSample.js 따라하기", "Styled-components 사용해보기"],
      active: true,
    },
    {
      id: 4,
      title: "6/8 과제 - 배열 항목 추가, 제거, 수정하기 실습 부분 따라하기",
      description: [
        "배열 항목 추가, 제거, 수정하기 실습 부분 따라하기",
        "응용하여 댓글 기능처럼 UI꾸미기",
      ],
      active: true,
    },
    {
      id: 5,
      title: "6/10 과제 - 포켓몬 카드🃏 만들기",
      description: [
        "페이지 title을 '포켓몬 카드'로 바꿔주세요. API로 포켓몬 이름을 가져오고 그것에 맞는 이미지를 뿌리세요.",
        "사용할 API: https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
        "사용 img : https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png",
      ],
      active: true,
    },
    {
      id: 6,
      title: "6/13 과제 - useReducer 연습 !",
      description: ["벨로퍼트 20 챕터 useReducer를 읽어보면서 따라해보기 !"],
      active: true,
    },
    {
      id: 7,
      title: "6/15 과제 - Context API 연습 !",
      description: [
        "context Api를 활용하여 isDark ,setIsDark를 처리하자.",
        "Provider로 App을 감싼다.",
        "Page는 prop를 거쳐가는 곳일 뿐 prop를 사용하지 않는다.",
        "Content는 isDark 하나",
        "Footer는 isDark, setIsDark 둘다 필요",
      ],
      active: true,
    },
  ];

  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home members={members} homeworks={homeworks} />}
          />
          <Route path="/g1" element={<G1 members={members} />} />
          <Route path="/daeguk" element={<Daeguk members={members} />} />
          <Route path="/chu" element={<Chu members={members} />} />
          <Route path="/*" element={<Error />} />

          <Page isDark={isDark} setIsDark={setIsDark} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
