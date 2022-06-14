import React from "react";
import styled from "styled-components";

const ActiveColor = styled.div`
  color: ${(props) => (props.active ? "red" : "blue")};
  cursor: pointer;
`;

const User = React.memo(
  ({ active, username, id, email, onDelete, onToggle }) => {
    return (
      <ActiveColor active={active} onClick={() => onToggle(id)}>
        <b>{username}</b> <span>({email})</span>
        <button
          onClick={(e) => {
            onDelete(id);
            e.stopPropagation();
          }}
        >
          삭제
        </button>
      </ActiveColor>
    );
  }
);

const UserList = ({ users, onDelete, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default React.memo(UserList);
