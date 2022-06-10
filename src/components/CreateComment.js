import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  textarea {
    width: 100%;
    padding: 0.5em;
  }
`;

function CreateComment({ username, content, onChange, onCreate }) {
  return (
    <>
      <input
        placeholder="이름"
        name="username"
        value={username}
        onChange={onChange}
      />
      <br />
      <Wrapper>
        <textarea
          placeholder="댓글내용"
          name="content"
          value={content}
          onChange={onChange}
        />
        <button onClick={onCreate}>등록</button>
      </Wrapper>
    </>
  );
}

export default CreateComment;
