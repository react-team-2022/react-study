import React from "react";

const Header = ({ title, description, active, id }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>active: {active ? "true입니다" : "false입니다"}</p>
      <p>id: {id}</p>
    </>
  );
};

export default Header;
