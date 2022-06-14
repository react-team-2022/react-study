import React, { useReducer, useState } from "react";

//reducer state 업데이트
//dispatch state 업데이트 위한 요구
//action 내용

//state안에는 reducer함수가 불리는 시점에 money(state)안에 들어가 있는 값이 들어가게 된다.
const reducer = (state, action) => {
  console.log("reducer가 일을합니다.", state, action);
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    default:
      return state;
  }
};

function TestReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>리듀서</h2>
      <p>잔고 {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => dispatch({ type: "deposit", payload: number })}>
        예금
      </button>
      <button>출금</button>
    </div>
  );
}

export default TestReducer;
