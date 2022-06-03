import { useState } from "react";

function VarietyInput() {
  const [size, setSize] = useState("미디움");

  const onChangeSizeHandler = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <h2>샌드위치 주문</h2>
      <form>
        <h3>사이즈 선택</h3>
        <input
          type="radio"
          id="small"
          name="size"
          value="스몰"
          onChange={onChangeSizeHandler}
          checked={size === "스몰"}
        />
        <label for="small">스몰</label>
        &nbsp;
        <input
          type="radio"
          id="medium"
          name="size"
          value="미디움"
          onChange={onChangeSizeHandler}
          checked={size === "미디움"}
        />
        <label for="medium">미디움</label>
        &nbsp;
        <input
          type="radio"
          id="large"
          name="size"
          value="라지"
          onChange={onChangeSizeHandler}
          checked={size === "라지"}
        />
        <label for="large">라지</label>
        <h3>재료 선택</h3>
        <input type="checkbox" id="tomato" name="ingredient" value="토마토" />
        <label for="tomato">토마토</label>
        &nbsp;
        <input type="checkbox" id="latus" name="ingredient" value="양상추" />
        <label for="latus">양상추</label>
        &nbsp;
        <input type="checkbox" id="cheese" name="ingredient" value="치즈" />
        <label for="cheese">치즈</label>
      </form>
      <p>
        주문결과)
        <br />
        -사이즈: {size}
        <br />
        -재료:
      </p>
    </>
  );
}

export default VarietyInput;
