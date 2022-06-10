import { useRef, useState } from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

function CommentTop() {
  // input 이름, 댓글 상태관리
  const [inputs, setInputs] = useState({
    username: "",
    content: "",
  });
  const { username, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // 댓글(id, username, date, content) 상태관리
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "김뫄뫄",
      date: "2022년 6월 9일",
      content: "리액트 짱짱맨!",
    },
  ]);
  // 댓글 id 변수
  const nextId = useRef(2);
  // 댓글 date
  const currentDate = new Date().toLocaleString();

  // 댓글추가(댓글, input 상태 관리)
  const onCreate = () => {
    // 댓글 date
    // const date = `${current.getDate()}/${
    //   current.getMonth() + 1
    // }/${current.getFullYear()}`;
    const comment = {
      id: nextId.current,
      username,
      date: currentDate,
      content,
    };
    setComments(comments.concat(comment));
    setInputs({
      username: "",
      content: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <h2>댓글</h2>
      <CreateComment
        username={username}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <CommentList comments={comments} />
    </>
  );
}

export default CommentTop;
