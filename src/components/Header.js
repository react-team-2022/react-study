import Button from "./Button";

const Header = ({ members }) => {
  return (
    <header>
      {members.map((member) => (
        <Button key={member.id} {...member} />
      ))}
    </header>
  );
};

export default Header;
