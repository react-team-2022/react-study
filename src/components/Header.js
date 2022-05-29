import styled from "styled-components";

const Wrapper = styled.header`
  width: 90%;
  height: 20vh;
  background-color: ${(props) => (props.isActive ? "white" : "black")};
  border: 2px solid ${(props) => (props.isActive ? "black" : "white")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  padding: 10px;
  border-radius: 10px;
`;

const Header = ({ title, description, active, id }) => {
  return (
    <Wrapper isActive={active} id={id}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Wrapper>
  );
};

Header.defaultProps = {
  title: "내용 입력",
  id: 0,
  active: false,
  description: "내용 입력",
};

export default Header;
