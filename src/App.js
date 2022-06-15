import { useState } from "react";
import Page from "./Page";

function App() {
  const [isDark, setIsDark] = useState(false);
  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;
