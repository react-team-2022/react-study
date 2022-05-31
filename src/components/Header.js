import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 20vh;
  background-color: ${(props) => (props.isActive ? "white" : "black")};
  border: 2px solid ${(props) => (props.isActive ? "black" : "white")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  padding: 10px;
`;

const Header = ({ title, description, id }) => {
  const [check, setCheck] = useState(true);
  const onClick = () => {
    setCheck(!check);
  };
  return (
    <Wrapper onClick={onClick} isActive={check} id={id}>
      <h1>{title}</h1>
      <div>{description}</div>
    </Wrapper>
  );
};

Header.defaultProps = {
  title: "내용 입력",
  id: 0,
  description: "내용 입력",
};

// Header.propTypes = {
//   title: PropTypes.string,
//   id: PropTypes.number,
//   active: PropTypes.boolean,
//   description: PropTypes.string,
// };

export default Header;
