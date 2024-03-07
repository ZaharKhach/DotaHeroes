import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container } from "../globalStyled/GlobalStyled";

import { filtersChanged } from "./slices/filterSlice";
import { searchStringChanged } from "./slices/searchSlice";

import { selectActiveFilter } from "./slices/filterSlice";

const FilterHeroesBlock = styled.div`
  margin-top: 17.96vh;
  box-sizing: border-box;
  width: 100%;
  height: 14.47vh;
  padding: 4.55vh 2.67vw 4.15vh 1.95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

const FilterHeroesTitle = styled.h3`
  color: #fff;
  font-size: 3.21vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 769px) {
    display: none;
  }
`;

const AtributeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22.81vw;
  height: 5.89vh;
`;

const AtributeTitle = styled.h3`
  color: #9c9c9c;
  font-size: 2.78vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-right: 0.65vw;
  @media (max-width: 530px) {
    font-size: 2vh;
  }
  @media (max-width: 375px) {
    font-size: 1.5vh;
  }
`;

const AtributeIcon = styled.img`
  display: inline;
  width: 4.25vw;
  cursor: pointer;
  filter: brightness(0.5) saturate(0);
  transition: all 0.5s;
  &.active {
    filter: none;
  }
  @media (max-width: 512px) {
    width: 5vw;
  }
  @media (min-width: 476px) {
    width: 5vw;
  }
`;

const Search = styled.input`
  border: none;
  width: 24%;
  height: 95%;
  box-sizing: border-box;
  padding: 0px 0.65vw;
  font-size: 2.68vh;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const FilterHeroes = ({ filters }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  useEffect(() => {
    dispatch(searchStringChanged(""));
  }, []);

  return (
    <Container>
      <FilterHeroesBlock>
        <FilterHeroesTitle>FILTER HEROES</FilterHeroesTitle>
        <AtributeBlock>
          <AtributeTitle>ATTRIBUTE</AtributeTitle>
          {filters.map((filter) => {
            return (
              <AtributeIcon
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-${filter}-active.png`}
                key={uuid()}
                className={activeFilter === filter ? "active" : null}
                onClick={() => dispatch(filtersChanged(filter))}
              />
            );
          })}
        </AtributeBlock>
        <Search
          placeholder="Search..."
          onChange={(e) => dispatch(searchStringChanged(e.target.value))}
        />
      </FilterHeroesBlock>
    </Container>
  );
};

export default FilterHeroes;
