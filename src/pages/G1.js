import Header from "../components/Header";
import styled from "styled-components";
import InputSample from "../components/InputSample";
import VarietyInput from "../components/VarietyInput";
import InputSampleRef from "../components/InputSampleRef";
import User from "../components/User";
import Bubbling from "../components/Bubbling";
import CommentTop from "../components/CommentTop";
import PokemonCard from "../components/PokemonCard";
import Counter from "../components/Counter";
import UserTop from "../components/UserTop";

const Wrapper = styled.div`
  padding: 1em;
  > * {
    margin-bottom: 0.5em;
  }
  input,
  button {
    padding: 0.5em;
  }
  h2 {
    border-bottom: 1px solid gray;
  }
`;

const G1 = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>😎</h1>
        <VarietyInput />
        <br />
        <InputSample />
        <InputSampleRef />
        <Bubbling />
        <User />
        <CommentTop />
        <PokemonCard />
        <Counter />
        <UserTop />
      </Wrapper>
    </>
  );
};

export default G1;
