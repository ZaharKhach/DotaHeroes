import React from "react";
import styled from "styled-components";
import {
  ButtonPlay,
  Steam,
  ButtonPlayLeftSide,
  ButtonPlayTitle,
  ButtonPlaySubtitle,
} from "../Main/FirstSecrion";
import logo from "../../assets/icons/steam.png";
import dotaLogo from "../../assets/icons/dota 2.png";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 281px;
  box-sizing: border-box;
  padding: 71px 48px 71px 57px;
`;

const DotaBlock = styled(Link)`
  width: 40%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.5s all;
  &:hover {
    transform: translateY(-5px);
  }
`;
const DotaLogo = styled.img`
  width: 150px;
  height: 139px;
`;
const DotaText = styled.div`
  display: inline;
  color: #fff;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-left: 10px;
`;

const Button = styled(ButtonPlay)`
  margin: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <DotaBlock to="/">
        <DotaLogo src={dotaLogo} alt="dota2"></DotaLogo>
        <DotaText>DOTA 2 </DotaText>
      </DotaBlock>

      <Button
        to="https://store.steampowered.com/app/570/Dota_2/"
        target="_blank"
      >
        <Steam alt="steam" src={logo} />
        <ButtonPlayLeftSide>
          <ButtonPlayTitle>play for free</ButtonPlayTitle>
          <ButtonPlaySubtitle>download on steam</ButtonPlaySubtitle>
        </ButtonPlayLeftSide>
      </Button>
    </Wrapper>
  );
};

export default Header;
