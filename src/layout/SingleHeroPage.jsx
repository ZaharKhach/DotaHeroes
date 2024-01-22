import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useGetDotaAbilitiesQuery,
  useGetDotaHeroAbilitiesQuery,
  useGetDotaHeroesQuery,
} from "../api/dota";

import background from "../assets/images/single_hero_bg.jpg";
import { GlobalWrapper } from "../components/globalStyled/GlobalStyled";

import HeroStats from "../components/SingleHero/HeroStats/Main";
import Hero from "../components/SingleHero/Hero/Hero";
import HeroLore from "../components/SingleHero/HeroLore/HeroLore";
import Abilites from "../components/SingleHero/Abilites/Main";

import { filterData, fitlerHeroAbilities } from "../fucntions";
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
  let hero;
  let heroAbilities;

  let heroLoreObj;
  let heroObj;
  let heroStatsObj;

  const { data, error, isLoading, isFetching } = useGetDotaHeroesQuery();
  const {
    data: heroesAbilities,
    error: errorHeroAbility,
    isLoading: isLoadingHeroAbility,
    isFetching: isFetchingHeroAbility,
  } = useGetDotaHeroAbilitiesQuery();
  const {
    data: allAbilities,
    isLoading: isLoadingAbilities,
    error: errorAbilities,
    isFetching: isFetchingAbilities,
  } = useGetDotaAbilitiesQuery();

  if (!isLoading || !isFetching) {
    hero = filterData(data, id);
    if (hero && hero[0]) {
      heroLoreObj = hero.map(heroLoreFilter);
      heroObj = hero.map(heroObjFilter);
      heroStatsObj = hero.map(heroStatsObjFilter);
    }
  }

  if (
    !isLoadingHeroAbility ||
    !isFetchingHeroAbility ||
    !isLoading ||
    !isFetching
  ) {
    if (hero && hero[0]) {
      heroAbilities = fitlerHeroAbilities(heroesAbilities, hero[0].name);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {error || errorHeroAbility || errorAbilities ? (
        <Error>
          <h1>{error.data.error}</h1>
          <hr />
          <h3>{error.status}</h3>
        </Error>
      ) : isLoading ||
        isFetching ||
        isLoadingHeroAbility ||
        isFetchingHeroAbility ||
        isLoadingAbilities ||
        isFetchingAbilities ? (
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
              <Abilites
                heroAbilities={heroAbilities}
                allAbilities={allAbilities}
                heroName={heroObj[0].name}
              />
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default SingleHeroPage;
