import { createGlobalStyle } from "styled-components";
import Poketmon from "./page/Poketmon";
import TestMemo from "./page/TestMemo";
import TestReducer from "./page/TestReducer";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Poketmon from "./page/Poketmon";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Poketmon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
