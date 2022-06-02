import { useState } from "react";

const Checkbox = () => {
  const [first, setFirst] = useState(true);
  const [firstValue, setFirstValue] = useState("");
  const [second, setSecond] = useState(true);

  const handleChange = (data) => {
    if (data == "first") {
      if (first == true) {
        console.log(data, "our value");
        setFirstValue("");
      }
      setFirst(!first);
      setFirstValue("first");
    }
    if (data == "second") {
      if (second == true) {
        console.log(data, "our value");
      }
      setSecond(!second);
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id="first"
        value={first}
        onChange={() => handleChange("first")}
      />
      first
      <input
        type="checkbox"
        id="second"
        value={second}
        onChange={() => handleChange("second")}
      />
      second
      <p>결과: {firstValue}</p>
    </>
  );
};

export default Checkbox;
