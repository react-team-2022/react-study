import { useState } from "react";

const InputSample = () => {
  const [userInfo, SetUserInfo] = useState({
    id: "",
    password: "",
    password2: "",
  });

  const { id, password, password2 } = userInfo;

  const onChange = (e) => {
    const { name, value } = e.target;

    SetUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onReset = () => {
    SetUserInfo({
      id: "",
      password: "",
      password2: "",
    });
  };
  return (
    <div>
      {/* label과 input이 연결되기 위해선 label for와 input id가 같아야함 */}
      <label for="id">ID : </label>
      <input
        placeholder="아이디"
        id="id"
        name="id"
        onChange={onChange}
        value={id}
      />
      <b>{id}</b>
      <br />
      <label for="password1">PW : </label>
      <input
        type="password"
        placeholder="비밀번호"
        id="password1"
        name="password"
        onChange={onChange}
        value={password}
      />
      <b>{password}</b>
      <br />
      <label for="password2">PW 확인 : </label>
      <input
        type="password"
        id="password2"
        placeholder="비밀번호 확인"
        name="password2"
        onChange={onChange}
        value={password2}
      />
      <b>{password2}</b>
      <br />
      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default InputSample;
