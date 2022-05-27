const Button = function ({ member, idx, changeMember }) {
  return <button onClick={changeMember}>{member}</button>;
};

export default Button;
