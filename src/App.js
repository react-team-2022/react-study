import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Pages */
import Chu from "./Pages/Chu";
import Daeguk from "./Pages/Daeguk";
import G1 from "./Pages/G1";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  const members = [
    {
      id: 0,
      memberName: "추홍규",
      path: "chu",
    },
    {
      id: 1,
      memberName: "강대국",
      path: "daeguk",
    },
    {
      id: 2,
      memberName: "민지원",
      path: "g1",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home members={members} />} />
          <Route path="/g1" element={<G1 members={members} />} />
          <Route path="/daeguk" element={<Daeguk members={members} />} />
          <Route path="/chu" element={<Chu members={members} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
