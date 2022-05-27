import { useState } from "react";
import Header from "./Header";

const Content = () => {
  const members = [
    {
      id: 0,
      memberName: "추홍규",
      text: "벨로퍼트 챕터 1 재밌다",
    },
    {
      id: 1,
      memberName: "강대국",
      text: "벨로퍼트 챕터 2 재밌다",
    },
    {
      id: 2,
      memberName: "민지원",
      text: "벨로퍼트 챕터 3 재밌다",
    },
  ];

  const [currentMember, setCurrentMember] = useState(members[0]);

  const changeMember = (e) => {
    const targetMember = members.filter(
      (elm) => elm.memberName === e.target.textContent
    );
    if (targetMember.length) {
      setCurrentMember(...targetMember);
    }
  };
  return (
    <div className="Content">
      <Header changeMember={changeMember} members={members} />
      <h1>{currentMember.memberName}님의 페이지</h1>
      <p>{currentMember.text}</p>
    </div>
  );
};

export default Content;
