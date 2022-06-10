import { createGlobalStyle } from "styled-components";
import Poketmon from "./page/Poketmon";

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
      <Poketmon />
    </>
  );
}

export default App;
