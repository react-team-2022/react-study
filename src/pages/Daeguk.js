import { useState, useRef, useMemo, useCallback } from "react";
import styled from "styled-components";

// components
import Header from "../components/Header";
import Modal from "../components/Modal";
import InputSample from "../components/InputSample";
import CreateUser from "../components/CreateUser";
import UserList from "../components/UserList";
import Comments from "../components/comments/Comments";
import Pokemon from "../components/pokemon/Pokemon";

// styled-components
const ShareBtn = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  color: white;
  background: black;
  border-radius: 10px;
  padding: 10px 20px;
  transition: 0.3s;
  border: none;

  &:hover {
    cursor: pointer;
    color: black;
    background: white;
  }
`;

const DivideHeader = styled.h1`
  color: green;
  margin: 15px 0;
  margin-left: 20px;
  font-size: 20px;
`;

const blueUserCounts = (users) => {
  return users.filter((user) => user.active).length;
};

// page component
const Daeguk = ({ members }) => {
  const [number, setNumber] = useState(0);

  const increaseNum = () => {
    setNumber(number + 1);
  };

  const decreaseNum = () => {
    setNumber((number) => number - 1);
  };

  const [input, setInput] = useState({
    favoriteAnimal: "",
    favoriteFood: "",
  });

  const { favoriteAnimal, favoriteFood } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onReset = () => {
    setInput({
      favoriteAnimal: "",
    });
  };

  // Modal창 조건부 렌더링
  const [isShow, setIsShow] = useState(false);

  const onShow = () => {
    setIsShow((isShow) => !isShow);
  };

  // 과제 4

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange2 = useCallback((e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: true,
    },
  ]);

  const count = useMemo(() => blueUserCounts(users), [users]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => [...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current++;
  }, [username, email]);

  const onDelete = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  return (
    <div>
      <Header members={members} />

      {/* 과제 1 */}
      <DivideHeader>-- 과제1 --</DivideHeader>
      <h1>대국의 페이지</h1>
      <h1>{number}</h1>
      <button onClick={increaseNum}>Up</button>
      <button onClick={decreaseNum}>Down</button>
      <hr />

      {/* 과제 2 */}
      <DivideHeader>-- 과제2 --</DivideHeader>
      <label htmlFor="animal">좋아하는 동물 : </label>
      <input
        id="animal"
        name="favoriteAnimal"
        value={favoriteAnimal}
        onChange={onChange}
      />
      {favoriteAnimal}
      <br />
      <label htmlFor="food">좋아하는 음식 : </label>
      <input id="food" />

      <button onClick={onReset}>초기화</button>
      <InputSample />
      <hr />

      {/* 과제 3 */}
      <DivideHeader>-- 과제3 --</DivideHeader>
      <ShareBtn onClick={onShow}>공유하기</ShareBtn>
      {isShow && <Modal onShow={onShow} />}
      <hr />

      {/* 과제 4 */}
      <DivideHeader>-- 과제4 --</DivideHeader>
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <CreateUser
        username={username}
        email={email}
        onChange2={onChange2}
        onCreate={onCreate}
      />
      <h3>빨간 유저: {count}</h3>
      <Comments />

      {/* 과제 5 */}
      <DivideHeader>-- 과제5 --</DivideHeader>
      <Pokemon />
    </div>
  );
};

export default Daeguk;
