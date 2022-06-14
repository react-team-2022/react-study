import { useEffect, useReducer, useState } from "react";
import styled, { keyframes } from "styled-components";

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
`;

const Cardbox = styled.div`
  border-top: 5px solid rgb(106, 77, 40);
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      background-color: white;
      border-radius: 5px;
      padding: 5px 10px;
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
    case "delete":
      console.log("삭제 성공", state, action);
      return {
        poketmon: state.poketmon.filter((poke) => poke.id !== action.payload),
      };
    case "turn":
      console.log("턴");
      return {
        poketmon: state.poketmon.map((poke) => {
          if (poke.id === action.payload) {
            console.log("체크 성공");
            return { ...poke, turn: !poke.turn };
          }
          return poke;
        }),
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
  }, [dispatch]);
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
            style={{
              transform: poke.turn ? `rotateY(0deg)` : `rotateY(360deg)`,
              transition: "0.5s",
            }}
          >
            <h1>{poke.name[0].toUpperCase() + poke.name.slice(1)}</h1>
            <img
              src={`https://img.pokemondb.net/sprites/x-y/normal/${poke.name}.png`}
              alt={poke.name}
            />
            <Cardbox>
              <p>{poke.name}</p>
              <div>
                <p>일련 - {poke.id}</p>
                <span
                  onClick={() => dispatch({ type: "delete", payload: poke.id })}
                >
                  삭제
                </span>
                <span
                  style={{ backgroundColor: poke.turn ? "gray" : "white" }}
                  onClick={() => dispatch({ type: "turn", payload: poke.id })}
                >
                  뒤집기
                </span>
              </div>
            </Cardbox>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Poketmon;
