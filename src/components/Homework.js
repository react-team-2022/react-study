import { useState } from "react";

const Homework = ({ id, title, description }) => {
  const [active, setActive] = useState(true);
  const isShow = () => {
    setActive(!active);
  };
  return (
    <div className="homework">
      {/* Homework 제목 */}
      <h3
        onClick={isShow}
        style={{ display: "inline-block", background: "rgba(0, 0, 0, 0.2)" }}
      >
        {id}) {title}
      </h3>
      {/* Homework 내용 조건부 렌더링 */}
      {active && (
        <ul>
          {description.map((text, idx) => (
            <li key={idx} className="description">
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homework;
