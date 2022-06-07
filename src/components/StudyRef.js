import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-right: 50px;
  }
`;

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

const StudyRef = () => {
  const [value, setValue] = useState(0);
  const specialValue = useRef(0);
  const onIncrease = () => {
    setValue((prev) => prev + 1);
  };

  const onIncrease2 = () => {
    specialValue.current += 1;
  };

  return (
    <Wrapper>
      <div>
        <h1>useState{value}</h1>
        {users.map((user) => (
          <ul>
            <li key={user.id}>{user.username}</li>
          </ul>
        ))}
        <span onClick={onIncrease}>버튼1</span>
      </div>
      <div>
        <h1 ref={specialValue}>useRef{specialValue.current}</h1>
        {users.map((user) => (
          <ul>
            <li key={user.id}>{user.username}</li>
          </ul>
        ))}
        <span onClick={onIncrease2}>버튼2</span>
      </div>
    </Wrapper>
  );
};

export default StudyRef;
