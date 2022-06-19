import React, { useContext, useRef } from "react";
import useInput from "../hooks/useInputs";
import { UserDispatch } from "../pages/Daeguk";

const CreateUser = () => {
  const dispatch = useContext(UserDispatch);

  const [{ username, email }, onChange2, reset] = useInput({
    username: "",
    email: "",
  });

  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current++,
        username,
        email,
      },
    });
    reset();
  };
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange2}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange2}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
