import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  > * {
    margin-bottom: 0.5em;
  }
  input,
  button {
    padding: 0.5em;
  }
`;

const G1 = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <h1>😎</h1>
        <input onChange={onChange} value={text} />
        <button onClick={onReset}>초기화</button>
        <p>결과: {text}</p>
        <hr />
      </Wrapper>
    </>
  );
};

export default G1;
