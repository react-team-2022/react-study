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

function Comment({ comment }) {
  return (
    <CommentListWrapper>
      <div>
        <b>{comment.username}</b>
        <DateWrapper>{comment.date}</DateWrapper>
        <p>{comment.content}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <br />
        <button>삭제</button>
      </div>
    </CommentListWrapper>
  );
}

function CommentList({ comments }) {
  return comments.map((comment) => <Comment comment={comment} />);
}

export default CommentList;
