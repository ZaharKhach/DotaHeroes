import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetDotaHeroesQuery } from "../api/dota";

import background from "../assets/images/single_hero_bg.jpg";
import { GlobalWrapper } from "../components/globalStyled/GlobalStyled";

import HeroStats from "../components/SingleHero/HeroStats/Main";
import Hero from "../components/SingleHero/Hero/Hero";
import HeroLore from "../components/SingleHero/HeroLore/HeroLore";
import Abilites from "../components/SingleHero/Abilites/Main";

import { filterData } from "../fucntions";
import {
  heroLoreFilter,
  heroObjFilter,
  heroStatsObjFilter,
} from "../fucntions";

import { Error, Loading } from "../components/globalStyled/GlobalStyled";
import { MoonLoader } from "react-spinners";

const Wrapper = styled(GlobalWrapper)`
  background: center center/cover no-repeat;
  background-image: url(${background});
  height: 400vh;
`;
const Back = styled(Link)`
  margin-left: 10px;
  color: #cecece;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(0, 0, 0, 0.8);
`;
const Container = styled.div`
  max-width: 95vw;
  margin: 0 auto;
`;
const ComponentsWrapper = styled.div`
  margin-top: -42px;
  grid-template-columns: 20% 49% 28%;
  display: grid;
  grid-gap: 15px;
`;

const SingleHeroPage = () => {
  let { id } = useParams();

  const { data, error, isLoading, isFetching } = useGetDotaHeroesQuery();
  const hero = filterData(data, id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroLoreObj = hero.map(heroLoreFilter);
  const heroObj = hero.map(heroObjFilter);
  const heroStatsObj = hero.map(heroStatsObjFilter);

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
            <Back to={`/heroes/`}>back to all</Back>
            <Container>
              <ComponentsWrapper>
                <HeroLore heroLore={heroLoreObj[0]} />
                <Hero name={heroObj[0].name} />
                <HeroStats heroStats={heroStatsObj[0]} />
              </ComponentsWrapper>
              <Abilites />
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default SingleHeroPage;
