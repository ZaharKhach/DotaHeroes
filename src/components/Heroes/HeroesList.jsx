import styled  from "styled-components";

import SingleHero from "./SingleHero";
import { Container } from "../globalStyled/GlobalStyled";

import { selectActiveFilter } from "./slices/filterSlice";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Wrapper = styled.section`
  margin-top: 15px;
  grid-template-columns: 297px 297px 297px 297px;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 15px;
`;

const HeroesList = ({ heroes }) => {
  const activeFilter = useSelector(selectActiveFilter);

  const filteredHeroes = useMemo(() => {
    if(activeFilter == 'none') {
      return heroes;
    } else {
      return heroes.filter(hero => hero.primary_attr == activeFilter)
    }
  })

  return (
    <Container>
      <Wrapper>
        {heroes.map((hero) => (
          <SingleHero key={hero.id} name={hero.name} img={hero.img} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default HeroesList;
