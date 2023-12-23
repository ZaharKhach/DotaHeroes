import React from "react";
import styled from "styled-components";

import Header from "../components/Heroes/Header";
import Title from "../components/Heroes/Title";
import FilterHeroes from "../components/Heroes/FilterHeroes";
import HeroesList from "../components/Heroes/HeroesList";
import { Error, Loading } from "../components/globalStyled/GlobalStyled";
import { MoonLoader } from "react-spinners";

import { useEffect } from "react";
import { useGetDotaHeroesQuery } from "../api/dota";
import background from "../assets/images/heroes_bg.jpg";
import { useSelector } from "react-redux";

import { selectFilters } from "../components/Heroes/slices/filterSlice";

const Wrapper = styled.div`
  background: url(${background});
  box-sizing: border-box;
  padding-bottom: 40px;
  min-height: 200vh;
`;

const HeroesPage = () => {
  const { data, error, isLoading, isFetching } = useGetDotaHeroesQuery();
  const filtersState = useSelector(selectFilters);

  useEffect(() => {
    // Прокрутка страницы вверх при монтировании компонента
    window.scrollTo(0, 0);
  }, []);

  let heroes;
  if (!isLoading) {
    heroes = data.map((hero) => {
      return {
        id: hero.id,
        name: hero.localized_name,
        img: hero.img,
        attgibute: hero.primary_attr
      };
    });
  }

  return (
    <>
      {error ? (
        <Error>
          <h1>{error.data.error}</h1>
          <hr />
          <h3>{error.status}</h3>
        </Error>
      ) : isLoading || isFetching ? (
        <Loading>
          <MoonLoader color="#ffffff" size={150} />
        </Loading>
      ) : (
        <>
          <Wrapper>
            <Header />
            <Title />
            <FilterHeroes filters={filtersState} />
            <HeroesList heroes={heroes} />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default HeroesPage;
