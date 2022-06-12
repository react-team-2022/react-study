import { useRef, useState } from "react";
import styled from "styled-components";
import CommentsList from "./CommentsList";

const CommentText = styled.textarea`
  width: 200px;
  height: 100px;
`;
const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      email: "superpowerkdg@gmail.com",
      password: "123123",
      comment: "아침은 졸려, 과제는 어렵고",
      isEdit: false,
    },
    {
      id: 2,
      email: "superpowerkdg@gmail.com",
      password: "123123",
      comment: "리액트를 공부하자",
      isEdit: false,
    },
    {
      id: 3,
      email: "superpowerkdg@gmail.com",
      password: "123123",
      comment: "그래서 점심 뭐먹지",
      isEdit: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    email: "",
    PW: "",
    comment: "",
    isEdit: false,
  });

  const { email, PW, comment } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const currentComment = {
      id: nextId.current,
      email: email,
      password: PW,
      comment: comment,
    };

    setComments((comments) => [...comments, currentComment]);

    setInputs((inputs) => ({ email: "", PW: "", comment: "" }));

    nextId.current++;
  };

  const onRemove = (id) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  };

  const onEdit = (id) => {
    const userInputPW = prompt("비밀번호를 알려주세요");

    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          // 비밀번호가 맞는지 검사 - 맞으면 수정 실행, 틀리면 수정 안됨
          if (comment.password === userInputPW) {
            alert("비밀번호가 맞아요");
            return { ...comment, isEdit: true };
          } else {
            alert("비밀번호가 틀려요");
          }
        }
        return comment;
      })
    );
  };

  const onEditComment = (id, editedComment) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              comment: editedComment,
              isEdit: false,
            }
          : comment
      )
    );
  };

  return (
    <div>
      <h1>댓글기능 구현</h1>
      <CommentsList
        comments={comments}
        onRemove={onRemove}
        onEdit={onEdit}
        onEditComment={onEditComment}
      />
      <form>
        <label htmlFor="email">아이디(Email) : </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />

        <br />
        <label htmlFor="password">비밀번호 : </label>
        <input
          id="password"
          type="password"
          placeholder="PW"
          name="PW"
          value={PW}
          onChange={onChange}
        />

        <br />
        <CommentText
          placeholder="댓글 입력하세요"
          name="comment"
          value={comment}
          onChange={onChange}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            onCreate();
          }}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default Comments;
