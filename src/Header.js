import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.section`
  background-color: lightblue;
  p {
    color: gray;
  }
`;

const H1Style = styled.h1`
  background-color: lightpink;
`;

const Header = ({ title, description, active, id }) => {
  return (
    <HeaderStyle>
      <H1Style>{title}</H1Style>
      <p>{description}</p>
      <p>active: {active ? "true입니다" : "false입니다"}</p>
      <p>id: {id}</p>
    </HeaderStyle>
  );
};

export default Header;
