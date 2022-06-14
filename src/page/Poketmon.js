import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 50px;
  padding: 20px;
  h1 {
    margin-bottom: 5px;
  }
`;

const Container = styled.div`
  padding: 50px;
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
`;

const Card = styled.div`
  grid-column: span 1;
  width: 300px;
  height: 400px;
  padding: 10px;
  flex: left;
  border: 5px solid rgb(106, 77, 40);
  border-radius: 5px;
  background-color: rgb(230, 206, 149);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 45px;
  }
  img {
    width: 50%;
  }
  div {
    border-top: 5px solid rgb(106, 77, 40);
    width: 100%;
    p {
      margin-top: 5px;
    }
  }
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const title = action.search.name;
      const newPokemon = {
        id: Date.now(),
        name: title,
        turn: false,
      };
      return {
        poketmon: [...state.poketmon, newPokemon],
      };
    case "turn":
      console.log("턴");
      return {
        poketmon: [...state.poketmon],
      };

    default:
      return state;
  }
};

const pokeArr = {
  poketmon: [
    { id: 124215125, name: "bulbasaur", turn: false },
    { id: 125125125, name: "charizard", turn: false },
  ],
};

const Poketmon = () => {
  const [name, setName] = useState("");
  const [poketCard, dispatch] = useReducer(reducer, pokeArr);
  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(poketCard);
    console.log(poketCard.poketmon);
    console.log(poketCard.poketmon[0].name);
    console.log(poketCard.poketmon.map((p) => p.name));
  }, [name]);
  return (
    <Wrapper>
      <h1>포켓몬 카드 스토어에 어서오세요</h1>
      <input type="text" value={name} onChange={onChange} />
      <button onClick={() => dispatch({ type: "add", search: { name } })}>
        뽑기
      </button>
      <Container>
        {poketCard.poketmon.map((poke, index) => (
          <Card
            key={index}
            id={poke.id}
            onClick={() => dispatch({ type: "turn" })}
          >
            <h1>{poke.name[0].toUpperCase() + poke.name.slice(1)}</h1>
            <img
              src={`https://img.pokemondb.net/sprites/x-y/normal/${poke.name}.png`}
              alt={poke.name}
            />
            <div>
              <p>{poke.name}</p>
              {poke.turn ? null : <p>이니셜번호 - {poke.id}</p>}
            </div>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Poketmon;
