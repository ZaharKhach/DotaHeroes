import React from "react";
import styled from "styled-components";

import { Hr } from "../../Main/FirstSecrion";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 80px;
`;
const TitleBox = styled.div`
  width: 420px;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;
const ImgWrapper = styled.div`
  max-width: 46px;
`;
const Img = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  z-index: 3;
`;
const Hr2 = styled(Hr)`
  margin-top: 20px;
  width: 80%;
`;
const RolesBox = styled.div`
  margin-top: 20px;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  z-index:2;
`;
const Role = styled.div`
  color: #cecece;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  font-family: "Hypatia", sans-serif;
`;
const WinrateBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;
const WinrateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WinrateText = styled.div`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  font-family: "Hypatia", sans-serif;
`;
const WinrateNumber = styled.div`
  color: #cecece;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: "Hypatia", sans-serif;
`;

const GifImg = styled.img`
  width: 70%;
  margin-top: 70px;
  margin-left: 30px; // Регулируйте отступ в соответствии с вашими предпочтениями
`;

const HeroLore = ({ heroLore }) => {
  const { name, roles, agility, turboWinRate, allPickWinRate, proPickWinRate } =
    heroLore;
  const agilities = {
    agi: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",
    str: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",
    int: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",
    all: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png",
  };
  console.log(roles);
  return (
    <Wrapper>
      <TitleBox>
        <ImgWrapper>
          <Img src={agilities[agility]} />
        </ImgWrapper>
        <Title>{name}</Title>
      </TitleBox>
      <Hr2 />
      <RolesBox>
        {roles.map((item) => {
          return <Role>{item}</Role>;
        })}
      </RolesBox>
      <WinrateBox>
        <WinrateBlock>
          <WinrateText>Turbo Winrate</WinrateText>
          <WinrateNumber>{turboWinRate}%</WinrateNumber>
        </WinrateBlock>
        <WinrateBlock>
          <WinrateText>ALL PICK WINRATE</WinrateText>
          <WinrateNumber>{allPickWinRate}%</WinrateNumber>
        </WinrateBlock>
        <WinrateBlock>
          <WinrateText>PRO SCENE WINRATE</WinrateText>
          <WinrateNumber>{proPickWinRate}%</WinrateNumber>
        </WinrateBlock>
      </WinrateBox>
    </Wrapper>
  );
};

export default HeroLore;
