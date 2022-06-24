import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CommentListWrapper = styled.div`
  border: 1px solid black;
  padding: 0.5em;
  > * > * {
    margin: 0.5em;
  }
  display: flex;
  justify-content: space-between;
`;
const DateWrapper = styled.p`
  color: gray;
  font-size: 0.8em;
`;
const RightItems = styled.div`
  text-align: right;
`;

function Comment({ comment, onRemove, onToggle }) {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const onChangeContent = (e) => {
    console.log(e.target.value);
  };

  return (
    <CommentListWrapper>
      <div>
        <b>{comment.username}</b>
        <DateWrapper>{comment.date}</DateWrapper>
        {isEdit ? (
          <textarea
            name="content"
            value={comment.content}
            onChange={(e) => onChangeContent(e)}
          />
        ) : (
          <p>{comment.content}</p>
        )}
      </div>
      <RightItems>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: comment.active ? "tomato" : "gray" }}
          onClick={() => onToggle(comment.id)}
        />
        <br />
        {isEdit ? (
          <button onClick={toggleIsEdit}>수정완료</button>
        ) : (
          <button onClick={toggleIsEdit}>수정</button>
        )}

        <button onClick={() => onRemove(comment.id)}>삭제</button>
      </RightItems>
    </CommentListWrapper>
  );
}

function CommentList({ comments, onRemove, onToggle }) {
  return comments.map((comment) => (
    <Comment comment={comment} onRemove={onRemove} onToggle={onToggle} />
  ));
}

export default CommentList;
