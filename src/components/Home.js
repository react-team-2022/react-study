import Header from "./Header";
import List from "./List";

const contents = [
  {
    title: "5월27일 스터디",
    description: "벨로퍼트 ch1~ch3",
    active: false,
    id: 1,
  },
  {
    title: "5월30일 스터디",
    description: "벨로퍼트 ch4~ch6",
    active: false,
    id: 2,
  },
  {
    title: "6월3일 스터디",
    description: "벨로퍼트 ch7~ch9",
    active: false,
    id: 3,
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <h1
        style={{
          margin: "1em",
        }}
      >
        스터디 일지
      </h1>
      {contents.map((item) => (
        <List key={item.id} title={item.title} description={item.description} />
      ))}
    </>
  );
};

export default Home;
