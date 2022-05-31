import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: lightblue;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  return (
    <LinkContainer>
      <li>
        <StyledLink to="/">홈</StyledLink>
      </li>
      <li>
        <StyledLink to="/chu">추홍규</StyledLink>
      </li>
      <li>
        <StyledLink to="/daeguk">강대국</StyledLink>
      </li>
      <li>
        <StyledLink to="/g1">민지원</StyledLink>
      </li>
    </LinkContainer>
  );
};

export default Header;
