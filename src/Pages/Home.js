import Header from "../components/Header";
import Homework from "../components/Homework";

import styled, { css } from "styled-components";

const Background = styled.div`
  background: ${(props) => props.color || "#ececec"};
`;

const Home = ({ members, homeworks }) => {
  return (
    <div>
      <Background color="orange">
        <Header members={members} />
      </Background>
      <Background>
        <h1>Home</h1>
        {homeworks.map((homework) => {
          const { id } = homework;

          return <Homework key={id} {...homework} />;
        })}
      </Background>
    </div>
  );
};

export default Home;
