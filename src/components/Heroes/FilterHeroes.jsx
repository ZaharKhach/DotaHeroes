import React from "react";
import styled from "styled-components";
import atributeIcon from "../../assets/icons/streight.png";
import { Container } from "../globalStyled/GlobalStyled";

const FilterHeroesBlock = styled.div`
  margin-top: 134px;
  box-sizing: border-box;
  width: 100%;
  height: 108px;
  padding: 34px 41px 31px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

const FilterHeroesTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const AtributeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 44px;
`;

const AtributeTitle = styled.h3`
  color: #9c9c9c;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-right: 10px;
`;

const AtributeIcon = styled.img`
  display: inline;
  max-width: 50px;
  cursor: pointer;
`;

const Search = styled.input`
  border: none;
  width: 24%;
  height: 95%;
  box-sizing: border-box;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const FilterHeroes = () => {
  return (
    <Container>
      <FilterHeroesBlock>
        <FilterHeroesTitle>FILTER HEROES</FilterHeroesTitle>
        <AtributeBlock>
          <AtributeTitle>ATTRIBUTE</AtributeTitle>
          <AtributeIcon src={atributeIcon} />
          <AtributeIcon src={atributeIcon} />
          <AtributeIcon src={atributeIcon} />
          <AtributeIcon src={atributeIcon} />
        </AtributeBlock>
        <Search placeholder="Seach..." />
      </FilterHeroesBlock>
    </Container>
  );
};

export default FilterHeroes;
