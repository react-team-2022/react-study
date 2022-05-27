import Button from "./Button";

const Header = ({ members, changeMember }) => {
  return (
    <header className="Header">
      {/* {
        for (let i = 0; i < members.length; i++)
        {
            <Button />
        }
    } */}
      {members.map((member, idx) => (
        <Button
          key={member.id}
          member={member.memberName}
          idx={idx}
          changeMember={changeMember}
        />
      ))}
    </header>
  );
};

export default Header;
