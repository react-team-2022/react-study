import { useState } from "react";
import styled from "styled-components";

const EditDiv = styled.div`
  background: ${(props) => (props.isEdit ? "orange" : "transparent")};
`;

const CommentsList = ({ comments, onRemove, onEdit, onEditComment }) => {
  const [edit, setEdit] = useState("");

  const onCommentEdit = (e) => {
    setEdit(e.target.value);
  };

  /* 
    1. 수정버튼을 누르면 비밀번호 확인 (o)
    2. 비밀번호가 맞을 시, input 박스에 현재 값이 들어가 있는 채로 보여줌 (o)
    3. 값을 바꿀 수 있음 (o)
      1) 현재 값을 useState로 상태로 지정
    4. 수정완료를 누르면 기존 데이터 배열이 갱신됨. (o)
   */
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <EditDiv isEdit={comment.isEdit}>
            {comment.isEdit ? (
              <input value={edit} onChange={(e) => onCommentEdit(e)} />
            ) : (
              <h4>{comment.comment}</h4>
            )}
            <p>
              작성자 :<span>{comment.email}</span>
              {/* 삭제버튼 */}
              <button onClick={() => onRemove(comment.id)}>삭제</button>
              {/* 수정버튼 */}
              {/* 수정을 할때 상태(수정 중인 댓글)의 기본값으로 기존 comment를 지정 */}
              {comment.isEdit || (
                <button
                  onClick={() => {
                    setEdit(comment.comment);
                    onEdit(comment.id);
                  }}
                >
                  수정
                </button>
              )}
              {/* 수정완료 버튼 */}
              {/* 수정완료 시 상태(수정 중인 댓글)를 초기화 */}
              {comment.isEdit && (
                <button
                  onClick={() => {
                    setEdit("");
                    onEditComment(comment.id, edit);
                  }}
                >
                  수정완료
                </button>
              )}
            </p>
          </EditDiv>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
