import styled from "styled-components";

const ActiveColor = styled.div`
  color: ${(props) => (props.active ? "red" : "blue")};
  cursor: pointer;
`;

const User = ({ user, onDelete, onToggle }) => {
  return (
    <ActiveColor active={user.active} onClick={() => onToggle(user.id)}>
      <b>{user.username}</b> <span>({user.email})</span>
      <button
        onClick={(e) => {
          onDelete(user.id);
          e.stopPropagation();
        }}
      >
        삭제
      </button>
    </ActiveColor>
  );
};

const UserList = ({ users, onDelete, onToggle }) => {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default UserList;
