import Header from "./../components/Header";

const Home = ({ members }) => {
  return (
    <div className="Content">
      <Header members={members} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
