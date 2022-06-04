import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 10px;
  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    label {
      white-space: nowrap;
      width: 40%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      input {
        width: 500px;
        padding: 10px 20px;
        margin: 5px;
      }
    }
    button {
      margin-top: 5px;
      padding: 5px 15px;
    }
  }
`;

const TextValue = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  div {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  span {
    border-radius: 50%;
  }
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    idName: "",
    password: "",
    passwordCheck: "",
    check: 0,
  });

  const loginInput = useRef();

  const { idName, password, passwordCheck, check } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onReset = () => {
    setInputs({
      idName: "",
      password: "",
      passwordCheck: "",
      check: 0,
    });
    loginInput.current.focus();
  };
  return (
    <Wrapper>
      <h1>회원가입</h1>
      <div>
        <label>
          아이디:
          <input
            name="idName"
            value={idName}
            onChange={onChange}
            placeholder="아이디를 적어주세요"
            maxLength="20"
            ref={loginInput}
          />
        </label>
        <label>
          비밀번호:
          <input
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호를 적어주세요"
            maxLength="20"
          />
        </label>
        <label>
          비밀번호 확인:
          <input
            name="passwordCheck"
            value={passwordCheck}
            type="password"
            onChange={onChange}
            placeholder="비밀번호를 확인해주세요"
            maxLength="20"
          />
        </label>
        <label>
          그냥 길이:
          <input
            type="range"
            name="check"
            onChange={onChange}
            value={check}
            min="0"
            max="10"
          />
        </label>

        <button onClick={onReset}>초기화</button>
      </div>
      <TextValue>
        <div>
          <h3>출력</h3>
          <p>아이디 : {idName}</p>
          <p>비밀번호 : {password}</p>
          <p>비밀번호 확인 : {passwordCheck}</p>
          <p>
            오류 :{" "}
            {password === passwordCheck ? (
              "일치"
            ) : (
              <span style={{ color: "red" }}>"비밀번호 확인 바람"</span>
            )}
          </p>
          <p>
            그냥 길이 :{" "}
            {check < 5 ? (
              <span style={{ padding: "2px 6px", backgroundColor: "hotpink" }}>
                {check}
              </span>
            ) : (
              <span
                style={{ padding: "4px 7px", backgroundColor: "yellowgreen" }}
              >
                {check}
              </span>
            )}
          </p>
        </div>
      </TextValue>
    </Wrapper>
  );
};

export default Login;
