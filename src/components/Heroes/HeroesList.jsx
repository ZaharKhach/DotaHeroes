import styled from "styled-components";

import SingleHero from "./SingleHero";
import { Container } from "../globalStyled/GlobalStyled";

import { selectActiveFilter } from "./slices/filterSlice";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { selectSearchString } from "./slices/searchSlice";

import { searchSymbol } from "../Main/fucntions";

const Wrapper = styled.section`
  margin-top: 15px;
  grid-template-columns: 297px 297px 297px 297px;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 15px;
`;

const HeroesList = ({ heroes }) => {
  const activeFilter = useSelector(selectActiveFilter);
  const searchString = useSelector(selectSearchString);

  console.log(searchString);

  const filteredHeroes = useMemo(() => {
    console.log(heroes);
    let filtereHeroes = heroes;
    if (activeFilter === "none") {
      return searchSymbol(searchString, filtereHeroes);
    } else {
      if (activeFilter !== "uni") {
        filtereHeroes = filtereHeroes.filter(
          (hero) => hero.attgibute === activeFilter
        );
      } else {
        filtereHeroes = filtereHeroes.filter(
          (hero) => hero.attgibute === "all"
        );
      }
      return searchSymbol(searchString, filtereHeroes);
    }
  }, [heroes, activeFilter, searchString]);

  const renderHeroes = (arr) => {
    return arr.map((hero) => (
      <SingleHero key={hero.id} name={hero.name} img={hero.img} />
    ));
  };

  return (
    <Container>
      <Wrapper>{renderHeroes(filteredHeroes)}</Wrapper>
    </Container>
  );
};

export default HeroesList;
