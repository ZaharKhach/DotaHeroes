import styled from "styled-components";

import SingleHero from "./SingleHero";
import { Container } from "../globalStyled/GlobalStyled";

import { selectActiveFilter } from "./slices/filterSlice";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { selectSearchString } from "./slices/searchSlice";

import { searchSymbol } from "../../fucntions";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.section`
  margin-top: 15px;
  grid-template-columns: 297px 297px 297px 297px;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

const HeroesList = ({ heroes }) => {
  const activeFilter = useSelector(selectActiveFilter);
  const searchString = useSelector(selectSearchString);

  const filteredHeroes = useMemo(() => {
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
      <motion.div
        key={hero.id}
        layout
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SingleHero
          key={hero.id}
          id={hero.id}
          name={hero.name}
          img={hero.img}
        />
      </motion.div>
    ));
  };

  return (
    <Container>
      <Wrapper
        as={motion.div}
        initial={{ y: "5%", opacity: "0%" }}
        animate={{ y: "0%", opacity: "100%" }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence>{renderHeroes(filteredHeroes)}</AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default HeroesList;
