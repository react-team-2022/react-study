import { useState } from "react";
import styled from "styled-components";

const Hover = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
  }
`;
const Homework = ({ id, title, description }) => {
  const [active, setActive] = useState(true);
  const isShow = () => {
    setActive(!active);
  };
  return (
    <div>
      {/* Homework 제목 */}
      <Hover>
        <h3
          onClick={isShow}
          style={{
            display: "inline-block",
            background: "rgba(0, 0, 0, 0.2)",
            margin: "10px 20px",
          }}
        >
          {id}) {title}
        </h3>
      </Hover>
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
