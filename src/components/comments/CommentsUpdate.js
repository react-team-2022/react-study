const CommentsUpdate = ({ editComment }) => {
  return (
    <div>
      <h5>댓글 수정하자</h5>
      {editComment.email}
      {editComment.comment}
    </div>
  );
};

export default CommentsUpdate;
