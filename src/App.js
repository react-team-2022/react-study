import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chu from "./components/Chu";
import Daeguk from "./components/Daeguk";
import G1 from "./components/G1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chu" element={<Chu />}></Route>
        <Route path="/daeguk" element={<Daeguk />}></Route>
        <Route path="/g1" element={<G1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
