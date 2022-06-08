import { useRef } from "react";
import Header from "./Header";
import styled from "styled-components";
import InputSample from "./InputSample";
import VarietyInput from "./VarietyInput";
import InputSampleRef from "./InputSampleRef";
import UserList from "./UserList";
import Bubbling from "./Bubbling";

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
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return (
    <>
      <Header />
      <Wrapper>
        <h1>😎</h1>
        <VarietyInput />
        <br />
        <InputSample />
        <InputSampleRef />
        <UserList users={users} />
        <Bubbling />
      </Wrapper>
    </>
  );
};

export default G1;
