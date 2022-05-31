import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: black;
  padding: 1em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  font-weight: 600;
`;

const Header = () => {
  return (
    <LinkContainer>
      <li>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faHouseChimney} />
        </StyledLink>
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
