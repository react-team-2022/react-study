import Header from "../Components/Header";
import Homework from "../Components/Homework";

const Home = ({ members, homeworks }) => {
  return (
    <div className="Content">
      <Header members={members} />
      <h1>Home</h1>
      {homeworks.map((homework) => {
        const { id } = homework;

        return <Homework key={id} {...homework} />;
      })}
    </div>
  );
};

export default Home;
