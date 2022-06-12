import { useEffect, useState } from "react";

// 서드파티 라이브러리
import axios from "axios";
import styled from "styled-components";
import { keyframes } from "styled-components";

// styledComponents
const PokemonCardContainer = styled.div`
  margin: 30px;
`;

const PokemonCardContainerlist = styled.ol`
  margin-top: 30px;
  text-align: center;
  position: relative;
`;

const ShakeCard = keyframes`
    0%{
        transform: rotate(90deg);
    }
    50%{
        transform: scale(0.6);

    }
    100%{
        position: absolute;
        top:0;
        left: 0;

    }
`;

const PokemonCard = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-right: 15px;
  margin-left: 15px;
  background: #ececec;
  border-radius: 10px;
  border: 2px solid rgba(9, 22, 163, 0.3);
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;

const PokemonHeader = styled.h3`
  margin-top: 25px;
`;

const PokemonImg = styled.img`
  width: 150px;
  margin: 20px;
`;

// components
const Pokemon = () => {
  /*
    페이지 title을 '포켓몬 카드'로 바꿔주세요
    useEffect를 이용해서 마운트될때 한번만 실행시킴
  */
  useEffect(() => {
    console.log(document.title);
    document.title = "포켓몬 카드";
  }, []);

  /* 
    API로 포켓몬 이름을 가져오고 그것에 맞는 이미지를 뿌리세요
  */
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      //요청 시작 시 error, pokemon 초기화
      setPokemon(null);
      setError(null);

      //loading을 true로 변경
      setLoading(true);

      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
      setPokemon(response.data.results); // 데이터
      // console.log(response.data.results);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러발생!</div>;
  if (!pokemon) return null;

  return (
    <PokemonCardContainer>
      <h1>포켓몬 카드 만들기</h1>
      <button onClick={fetchPokemon}>다시뽑기</button>
      {/* <button>섞기</button> */}
      <PokemonCardContainerlist>
        {pokemon.map((elm) => (
          <PokemonCard
            key={elm.url.slice(elm.url.length - 3, elm.url.length - 1)}
          >
            <PokemonHeader>{elm.name.toUpperCase()}</PokemonHeader>
            <PokemonImg
              src={`https://img.pokemondb.net/sprites/x-y/normal/${elm.name}.png`}
              alt={elm.name}
            />
          </PokemonCard>
        ))}
      </PokemonCardContainerlist>
    </PokemonCardContainer>
  );
};

export default Pokemon;
