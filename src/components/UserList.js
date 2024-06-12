import React, { useContext } from "react";
import styled from "styled-components";
import { UserDispatch } from "../pages/Daeguk";

const ActiveColor = styled.div`
  color: ${(props) => (props.active ? "red" : "blue")};
  cursor: pointer;
`;

const User = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch);

  return (
    <ActiveColor
      active={user.active}
      onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
    >
      <b>{user.username}</b> <span>({user.email})</span>
      <button
        onClick={(e) => {
          dispatch({ type: "REMOVE_USER", id: user.id });
          e.stopPropagation();
        }}
      >
        삭제
      </button>
    </ActiveColor>
  );
});

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default React.memo(UserList);
