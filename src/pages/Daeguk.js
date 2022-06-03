import { useState } from "react";

import Header from "../components/Header";

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
  return (
    <div>
      <Header members={members} />
      <h1>대국의 페이지</h1>
      <h1>{number}</h1>
      <button onClick={increaseNum}>Up</button>
      <button onClick={decreaseNum}>Down</button>
      <br />
      <label for="animal">좋아하는 동물 : </label>
      <input
        id="animal"
        name="favoriteAnimal"
        value={favoriteAnimal}
        onChange={onChange}
      />
      {favoriteAnimal}
      <br />
      <label for="food">좋아하는 음식 : </label>
      <input id="food" />

      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default Daeguk;
