import { useState } from "react";
import styled from "styled-components";

// components
import Header from "../components/Header";
import Modal from "../components/Modal";

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

  return (
    <div>
      <Header members={members} />
      <h1>대국의 페이지</h1>
      <h1>{number}</h1>
      <button onClick={increaseNum}>Up</button>
      <button onClick={decreaseNum}>Down</button>
      <br />
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
      <hr />
      <ShareBtn onClick={onShow}>공유하기</ShareBtn>
      {isShow && <Modal onShow={onShow} />}
    </div>
  );
};

export default Daeguk;
