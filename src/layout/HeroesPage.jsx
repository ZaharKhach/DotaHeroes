import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Heroes/Header";
import background from "../assets/images/heroes_bg.jpg";
import { useEffect } from "react";
import Title from "../components/Heroes/Title";
import FilterHeroes from "../components/Heroes/FilterHeroes";

const Wrapper = styled.div`
  min-height: 2901px;
  background: url(${background})  ;
`;

const HeroesPage = () => {
  useEffect(() => {
    // Прокрутка страницы вверх при монтировании компонента
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Title/>
      <FilterHeroes/>
    </Wrapper>
  );
};

export default HeroesPage;
