import { useState } from "react";
import Header from "../components/Header";

const data = {
  description:
    "props 는 properties 의 줄임말입니다. 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회하면 됩니다.",
  title: "리액트 props",
};

const Home = () => {
  const [check, setCheck] = useState(true);
  return (
    <>
      <Header
        title={data.title}
        description={data.description}
        active={check}
        id={0}
      />
      <span onClick={() => setCheck(!check)}>check{check}</span>
    </>
  );
};

export default Home;
