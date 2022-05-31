import Header from "../components/Header";
import Login from "../components/Login";

const data = {
  description: "내용 없음",
  title: "리액트 스터디",
};

const Home = () => {
  return (
    <>
      <Header title={data.title} description={data.description} id={0} />
      <Login />
    </>
  );
};

export default Home;
