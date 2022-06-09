import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 10px;
  div {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  ul {
    width: 50%;
    height: 100%;
    li {
      height: 50px;
      text-align: center;
      color: rgba(0, 0, 0, 0.7);
      padding: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        background-color: white;
        &:hover {
          background-color: black;
        }
      }
    }
  }
`;

const InputBox = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Exam8 = () => {
  const [inputs, setInputs] = useState({ username: "", type: "front-end" });
  const { username, type } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [users, setUsers] = useState([
    { id: 1, username: "추홍규", type: "front-end" },
    { id: 2, username: "김연준", type: "back-end" },
    { id: 3, username: "이경은", type: "front-end" },
    { id: 4, username: "김대희", type: "back-end" },
    { id: 5, username: "민지원", type: "front-end" },
    { id: 6, username: "강대국", type: "front-end" },
  ]);

  const nextId = useRef(7);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      type,
    };
    setUsers([...users, user]);
    setInputs({ username: "", type: "front-end" });
    nextId.current += 1;
    console.log(user);
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onFind = (type) => {
    setUsers(users.filter((user) => user.type === type));
  };

  const onExit = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, type: "취업" } : user))
    );
  };
  return (
    <Wrapper>
      <div>
        <ul>
          {users.map((file, index) => (
            <li
              style={
                file.type === "front-end"
                  ? { backgroundColor: "hotpink" }
                  : { backgroundColor: "skyblue" }
              }
              key={index}
            >
              {file.username}
              <span onClick={() => onRemove(file.id)}>✖️</span>
              <span onClick={() => onExit(file.id)}>✔️</span>
            </li>
          ))}
        </ul>
      </div>
      <InputBox>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="성함"
          onChange={onChange}
        />
        <select name="type" value={type} placeholder="소속" onChange={onChange}>
          <option value="front-end" selected>
            프론트 엔드
          </option>
          <option value="back-end">백 엔드</option>
        </select>
        <button onClick={onCreate}>등록</button>
        <button onClick={() => onFind("front-end")}>프론트 엔드</button>
        <button onClick={() => onFind("back-end")}>백 엔드</button>
      </InputBox>
    </Wrapper>
  );
};

export default Exam8;
