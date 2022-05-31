import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ListContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
  margin: 0.5em;

  p {
    margin-top: 0.5em;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = ({ title, description, active }) => {
  const [toggle, setToggle] = useState(active);

  const onClickArrowHandler = () => {
    setToggle(!toggle);
  };
  return (
    <ListContainer>
      <TitleContainer>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={onClickArrowHandler}
          size="xl"
        />
      </TitleContainer>
      {toggle && <p>{description}</p>}
    </ListContainer>
  );
};

export default List;
