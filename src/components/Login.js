import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 10px;
  div {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    input {
      width: 40%;
      padding: 10px 20px;
    }
    button {
      padding: 10px 15px;
    }
  }
`;

const TextValue = styled.span`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
    font-size: 25px;
  }
`;

const Login = () => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onReset = () => {
    setInput("");
  };
  return (
    <Wrapper>
      <div>
        <input value={input} onChange={onChange} maxLength="20" />
        <button onClick={onReset}>초기화</button>
      </div>
      <TextValue>
        <h3>출력: {input} </h3>
      </TextValue>
    </Wrapper>
  );
};

export default Login;
