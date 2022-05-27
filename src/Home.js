import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header title="제목쓰" description="설명쓰" active={false} id={1} />
    </>
  );
};

//Title(String), Description(String), Active(boolean), Id(Number)

export default Home;
