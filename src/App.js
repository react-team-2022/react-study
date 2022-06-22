import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chu from "./pages/Chu";
import Daeguk from "./pages/Daeguk";
import G1 from "./pages/G1";
import GlobalStyle from "./components/GlobalStyle";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chu" element={<Chu />}></Route>
          <Route path="/daeguk" element={<Daeguk />}></Route>
          <Route path="/g1" element={<G1 />}></Route>
          <Route path="/ckbox" element={<Checkbox />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
