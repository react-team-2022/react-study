import Capture from "../components/Capture";
import Event from "../components/Event";
import Header from "../components/Header";
import Login from "../components/Login";
import StudyRef from "../components/StudyRef";

const data = {
  description: "내용 없음",
  title: "리액트 스터디",
};

const Home = () => {
  return (
    <>
      <Header title={data.title} description={data.description} id={0} />
      <Login />
      <Event />
      <Capture />
      <StudyRef />
    </>
  );
};

export default Home;
