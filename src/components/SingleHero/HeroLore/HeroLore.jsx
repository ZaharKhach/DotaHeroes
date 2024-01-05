import React from "react";
import styled from "styled-components";

import { Hr } from "../../Main/FirstSecrion";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const TitleBox = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Hr2 = styled(Hr)`
  margin-top: 20px;
  width: 420px;
`;
const RolesBox = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  grid-gap: 8px;
`;
const Role = styled.div`
  color: #cecece;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
`;
const WinrateBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
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
`;
const WinrateNumber = styled.div`
  color: #cecece;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const GifImg = styled.img`
  width: 70%;
  margin-top: 70px;
  margin-left: 30px; // Регулируйте отступ в соответствии с вашими предпочтениями
`;

const HeroLore = () => {
  return (
    <Wrapper>
      <TitleBox>
        <ImgWrapper>
          <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" />
        </ImgWrapper>
        <Title>ANTI-MAGE</Title>
      </TitleBox>
      <Hr2 />
      <RolesBox>
        <Role>Carry</Role>
        <Role>Carry</Role>
        <Role>Carry</Role>
        <Role>Carry</Role>
        <Role>Carry</Role>
        <Role>Carry</Role>
      </RolesBox>
      <WinrateBox>
        <WinrateBlock>
          <WinrateText>TURBO WINRATE</WinrateText>
          <WinrateNumber>52.22%</WinrateNumber>
        </WinrateBlock>
        <WinrateBlock>
          <WinrateText>ALL PICK WINRATE</WinrateText>
          <WinrateNumber>52.22%</WinrateNumber>
        </WinrateBlock>
        <WinrateBlock>
          <WinrateText>PRO SCENE WINRATE</WinrateText>
          <WinrateNumber>52.22%</WinrateNumber>
        </WinrateBlock>
      </WinrateBox>

      <GifImg src="https://media.tenor.com/wRlazwysyPIAAAAC/russian-boy-dancing.gif" />
    </Wrapper>
  );
};

export default HeroLore;
