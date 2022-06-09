import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 10px;
  h1 {
    margin-bottom: 20px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  background-color: rgba(55, 101, 255, 1);
`;

const Box2 = styled(Box)`
  width: 400px;
  height: 300px;
  background-color: rgba(70, 132, 255, 1);
`;

const Box3 = styled(Box)`
  width: 300px;
  height: 200px;
  background-color: rgba(110, 178, 255, 1);
`;

const Console = styled.div`
  width: 500px;
  height: 400px;
  background-color: rgba(0, 34, 84, 1);
  border: 1px solid black;
  color: white;
  div {
    padding: 5px 3px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Event = () => {
  const [log, setLog] = useState("");
  const onClick1 = (e) => {
    // setLog((prev) => prev + "1번 ");
    // setLog((prev) => prev + e.target.id + "번 ");
    setLog((prev) => prev + e.currentTarget.id + "번 ");
    console.log("1번 클릭");
  };
  const onClick2 = (e) => {
    // setLog((prev) => prev + "2번 ");
    setLog((prev) => prev + e.target.id + "번 ");
    // setLog((prev) => prev + e.currentTarget.id + "번 ");
    console.log("2번 클릭");
  };
  const onClick3 = (e) => {
    setLog((prev) => prev + e.target.id + "번 ");
    // setLog((prev) => prev + "3번 ");
    // setLog((prev) => prev + e.currentTarget.id + "번 ");
    console.log("3번 클릭");
    // e.stopPropagation();
  };
  return (
    <Wrapper>
      <h1>이벤트 버블링( Event bubbling )</h1>
      <BoxContainer>
        <Box id="1" onClick={onClick1}>
          1번
          <Box2 id="2" onClick={onClick2}>
            2번
            <Box3 id="3" onClick={onClick3}>
              3번
            </Box3>
          </Box2>
        </Box>
        <Console>
          <h1>Console log</h1>
          <div>
            {log.length < 1 ? log : log.split(" ").map((p) => <span>{p}</span>)}
          </div>
        </Console>
      </BoxContainer>
    </Wrapper>
  );
};

export default Event;
