import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PokemonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  row-gap: 20px;
`;

const CardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
  @font-face {
    font-family: "DungGeunMo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .pokemon-name {
    font-family: "DungGeunMo";
  }
`;

function PokemonCard() {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setError(null);
        setPokemons(null);
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`
        );
        setPokemons(response.data.results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPokemons();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!pokemons) return null;

  return (
    <>
      <h2>포켓몬카드</h2>
      <PokemonWrapper>
        {pokemons.map((pokemon, index) => {
          let pokemonImgSrc = `https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`;
          return (
            <CardWrapper key={index}>
              <img src={pokemonImgSrc} alt={pokemon.name} />
              <h3 className="pokemon-name">{pokemon.name}</h3>
            </CardWrapper>
          );
        })}
      </PokemonWrapper>
    </>
  );
}

export default PokemonCard;
