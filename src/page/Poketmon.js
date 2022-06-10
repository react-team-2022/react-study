import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: yellowgreen;
`;

const Container = styled.div`
  width: ${300 * 20} + "px";
  height: 350px;
  overflow-x: scroll;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 10px;
  flex: left;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-right: 10px;
`;

const Poketmon = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then(
      (response) =>
        response.json().then((data) => {
          setData(data.results);
        })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <Container>
        {data.map((poke, index) => (
          <Card>
            <h1 key={index}>
              {poke.name[0].toUpperCase() + poke.name.slice(1)}
            </h1>
            <img
              src={`https://img.pokemondb.net/sprites/x-y/normal/${poke.name}.png`}
              alt={poke.name}
            />
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Poketmon;
