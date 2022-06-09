import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  ul {
    width: 70%;
    height: 100%;
    li {
      height: 100px;
      text-align: center;
      color: rgba(0, 0, 0, 0.7);
      padding: 10px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
        padding: 9px 10px;
        background-color: rgb(241, 241, 241);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        cursor: pointer;
        border-radius: 50%;
        &:hover {
          transform: scale(1.2);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
            rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
      }
    }
  }
`;

const InputBox = styled.section`
  width: 70%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgb(247, 247, 247);
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  input {
    border: none;
    border-bottom: 2px solid black;
    padding: 10px;
    margin-bottom: 5px;
  }
  textarea {
    width: 100%;
    height: 6.25em;
    border: none;
    resize: none;
  }
  button {
    position: absolute;
    z-index: 5;
    right: 50px;
    bottom: 50px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

const ProfilCircle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 170, 91);
  color: white;
  border-radius: 50%;
`;

const Exam8 = () => {
  const [inputs, setInputs] = useState({
    username: "",
    comment: "",
    active: false,
  });
  const { username, comment } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [users, setUsers] = useState([
    { id: 1, username: "추홍규", comment: "하기 싫다", active: false },
    { id: 5, username: "민지원", comment: "열심히 하셔야죠.", active: false },
    { id: 6, username: "강대국", comment: "열심히 하셔야죠", active: false },
  ]);

  const nextId = useRef(7);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      comment,
    };
    setUsers([...users, user]);
    setInputs({ username: "", comment: "" });
    nextId.current += 1;
    console.log(user);
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <Wrapper>
      <h1>댓글창 ({users.length})</h1>
      <Container>
        <ul>
          {users.map((file, index) => (
            <li
              style={
                !file.active
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "hotpink" }
              }
              key={index}
            >
              <ProfilCircle>{file.username}</ProfilCircle>
              <div>
                <h2>{file.username}</h2>
                <p>{file.comment}</p>
              </div>
              <div>
                <span onClick={() => onRemove(file.id)}>✖️</span>
                <span onClick={() => onToggle(file.id)}>♥</span>
              </div>
            </li>
          ))}
        </ul>
        <InputBox>
          <input
            comment="text"
            name="username"
            value={username}
            placeholder="성함"
            onChange={onChange}
          />
          <textarea
            name="comment"
            value={comment}
            placeholder="내용없음"
            onChange={onChange}
          ></textarea>
          <button onClick={onCreate}>등록</button>
        </InputBox>
      </Container>
    </Wrapper>
  );
};

export default Exam8;
