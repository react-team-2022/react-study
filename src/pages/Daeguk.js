import { useState, useRef, useMemo, useCallback, useReducer } from "react";
import styled from "styled-components";

// components
import Header from "../components/Header";
import Modal from "../components/Modal";
import InputSample from "../components/InputSample";
import CreateUser from "../components/CreateUser";
import UserList from "../components/UserList";
import Comments from "../components/comments/Comments";
import Pokemon from "../components/pokemon/Pokemon";
import Counter from "../components/reducer/Counter";
import useInput from "../hooks/useInputs";

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

export const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
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
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: { ...state.inputs, [action.name]: action.value },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

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

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  // const { username, email } = state.inputs;

  const [{ username, email }, onChange2, reset] = useInput({
    username: "",
    email: "",
  });

  const count = useMemo(() => blueUserCounts(users), [users]);

  // const nextId = useRef(4);

  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email,
  //   };
  //   setUsers((users) => [...users, user]);

  //   setInputs({
  //     username: "",
  //     email: "",
  //   });

  //   nextId.current++;
  // }, [username, email]);

  // const onDelete = useCallback((id) => {
  //   setUsers((users) => users.filter((user) => user.id !== id));
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setUsers((users) =>
  //     users.map((user) =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // }, []);

  // const onChange2 = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     name,
  //     value,
  //   });
  // };

  const nextId = useRef(4);

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: "CREATE_USER",
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //     },
  //   });
  //   nextId.current++;
  // }, [username, email]);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current++;
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_USER", id: id });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE_USER", id: id });
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
      <UserList users={users} onToggle={onToggle} onDelete={onRemove} />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange2}
        onCreate={onCreate}
      />
      <h3>빨간 유저: {count}</h3>

      {/* 댓글 */}
      <Comments />

      {/* 과제 5 */}
      <DivideHeader>-- 과제5 --</DivideHeader>
      <Pokemon />

      {/* 과제 6 */}
      <DivideHeader>-- 과제6 --</DivideHeader>
      <Counter />
    </div>
  );
};

export default Daeguk;
