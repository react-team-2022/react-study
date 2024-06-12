import React, { useState } from "react";
import styled from "styled-components";

const EditDiv = styled.div`
  background: ${(props) => (props.isEdit ? "orange" : "transparent")};
`;

const Comment = React.memo(
  ({ comment, id, email, isEdit, onRemove, onEdit, onEditComment }) => {
    // console.log("렌더링");

    const [edit, setEdit] = useState("");

    const onCommentEdit = (e) => {
      setEdit(e.target.value);
    };

    return (
      <EditDiv isEdit={isEdit}>
        {isEdit ? (
          <input value={edit} onChange={(e) => onCommentEdit(e)} />
        ) : (
          <h4>{comment}</h4>
        )}
        <p>
          작성자 :<span>{email}</span>
          {/* 삭제버튼 */}
          <button onClick={() => onRemove(id)}>삭제</button>
          {/* 수정버튼 */}
          {/* 수정을 할때 상태(수정 중인 댓글)의 기본값으로 기존 comment를 지정 */}
          {isEdit || (
            <button
              onClick={() => {
                setEdit(comment);
                onEdit(id);
              }}
            >
              수정
            </button>
          )}
          {/* 수정완료 버튼 */}
          {/* 수정완료 시 상태(수정 중인 댓글)를 초기화 */}
          {isEdit && (
            <button
              onClick={() => {
                setEdit("");
                onEditComment(id, edit);
              }}
            >
              수정완료
            </button>
          )}
        </p>
      </EditDiv>
    );
  }
);
const CommentsList = ({ comments, onRemove, onEdit, onEditComment }) => {
  /* 
    1. 수정버튼을 누르면 비밀번호 확인 (o)
    2. 비밀번호가 맞을 시, input 박스에 현재 값이 들어가 있는 채로 보여줌 (o)
    3. 값을 바꿀 수 있음 (o)
      1) 현재 값을 useState로 상태로 지정
    4. 수정완료를 누르면 기존 데이터 배열이 갱신됨. (o)
   */
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment
            {...comment}
            onRemove={onRemove}
            onEdit={onEdit}
            onEditComment={onEditComment}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(CommentsList);
