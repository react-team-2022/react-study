function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      <h2>useRef로 컴포넌트 안의 변수 만들기</h2>
      <br />
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
} 

export default UserList;
