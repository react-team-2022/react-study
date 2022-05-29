import Button from "./Button";

const Header = ({ members }) => {
  return (
    <header className="Header">
      {members.map((member) => (
        <Button key={member.id} {...member} />
      ))}
    </header>
  );
};

export default Header;
