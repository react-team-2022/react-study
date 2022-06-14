import React, { useRef, useState, useMemo, useCallback } from "react";

import CommentsList from "./CommentsList";
import CreateComments from "./CreateComments";

const countEditComment = (comments) => {
  return comments.filter((comment) => comment.isEdit).length;
};

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

  const counts = useMemo(() => countEditComment(comments), [comments]);

  const [inputs, setInputs] = useState({
    email: "",
    PW: "",
    comment: "",
    isEdit: false,
  });

  const { email, PW, comment } = inputs;

  const onChange = useCallback((e) => {
    console.log("onChange");
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    console.log("onCreate");
    const currentComment = {
      id: nextId.current,
      email: email,
      password: PW,
      comment: comment,
    };

    setComments((comments) => [...comments, currentComment]);

    setInputs({ email: "", PW: "", comment: "" });

    nextId.current++;
  }, [PW, email, comment]);

  const onRemove = useCallback((id) => {
    console.log("onremove");
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  }, []);

  const onEdit = useCallback((id) => {
    console.log("onEdit");
    const userInputPW = prompt("비밀번호를 알려주세요");

    setComments((comments) =>
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
  }, []);

  const onEditComment = useCallback((id, editedComment) => {
    console.log("onEditComment");
    setComments((comments) =>
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
  }, []);

  return (
    <div>
      <h1>댓글기능 구현</h1>
      <CommentsList
        comments={comments}
        onRemove={onRemove}
        onEdit={onEdit}
        onEditComment={onEditComment}
      />
      <CreateComments
        email={email}
        PW={PW}
        comment={comment}
        onChange={onChange}
        onCreate={onCreate}
      />
      <h3>수정하는 댓글 수 : {counts} </h3>
    </div>
  );
};

export default Comments;
