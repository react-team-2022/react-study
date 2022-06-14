import React from "react";
import styled from "styled-components";

const CommentText = React.memo(styled.textarea`
  width: 200px;
  height: 100px;
`);

const CreateComments = ({ email, PW, comment, onChange, onCreate }) => {
  return (
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
  );
};

export default React.memo(CreateComments);
