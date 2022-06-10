import { useState } from "react";

const CommentsList = ({ comments, onRemove, onEdit, onEditComment }) => {
  const [inputs, setInputs] = useState({
    email: "",
    comment: "",
  });
  const { email, comment2 } = inputs;

  const onChange = (e, id) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.isEdit ? (
            <input
              value={comment.comment}
              name="comment"
              onChange={(e) => {
                onChange(e, comment.id);
              }}
            />
          ) : (
            <h4>{comment.comment}</h4>
          )}
          <p>
            작성자 :
            {comment.isEdit ? (
              <input
                value={comment.email}
                name="email"
                onChange={onEditComment}
              />
            ) : (
              <span>{comment.email}</span>
            )}
            <button onClick={() => onRemove(comment.id)}>삭제</button>
            <button
              onClick={() => {
                onEdit(comment.id);
              }}
            >
              수정
            </button>
            {comment.isEdit && <button>수정완료</button>}
          </p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
