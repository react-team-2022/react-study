import styled from "styled-components";

const FirstWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  background-color: lightpink;
`;
const SecondWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  background-color: lightgreen;
`;
const ThirdWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  background-color: lightblue;
`;

function Bubbling() {
  return (
    <>
      <h2>이벤트 버블링</h2>
      <FirstWrapper
        onClick={() => {
          alert("first!");
        }}
      >
        first
        <SecondWrapper
          onClick={(e) => {
            e.stopPropagation();
            alert("second!!");
          }}
        >
          second
          <ThirdWrapper onClick={() => alert("third!!!")}>third</ThirdWrapper>
        </SecondWrapper>
      </FirstWrapper>
    </>
  );
}

export default Bubbling;
