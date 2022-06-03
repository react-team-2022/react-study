import { useRef, useState } from "react";

function InputSampleRef() {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({ name: "", nickname: "" });
    nameInput.current.focus();
  };

  const nameInput = useRef();

  return (
    <>
      <h2>useRef로 특정 DOM선택하기</h2>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <p>
        값: {name} ({nickname})
      </p>
    </>
  );
}

export default InputSampleRef;
