import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import InputSample from "./InputSample";
import VarietyInput from "./VarietyInput";

const Wrapper = styled.div`
  padding: 1em;
  > * {
    margin-bottom: 0.5em;
  }
  input,
  button {
    padding: 0.5em;
  }
  h2 {
    border-bottom: 1px solid gray;
  }
`;

const G1 = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>😎</h1>
        <VarietyInput />
        <br />
        <InputSample />
      </Wrapper>
    </>
  );
};

export default G1;
