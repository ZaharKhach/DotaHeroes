import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/images/first_bg.png";
import logo from "../assets/icons/steam.png";
import Rectangle from "./Rectangle";

const Wrapper = styled.section`
  box-sizing: border-box;
  height: 100vh;
  padding: 100px 0px 293px 0px;
  background: url(${background}) center center/cover no-repeat;
  border: none;
  background-size: 100% 103%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  width: 714px;
  color: #fff;
  font-size: 4rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #a7a7a7;
  font-family: "Inter";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const Hr = styled.div`
  margin-top: 84px;
  width: 420px;
  height: 5px;
  background: #ff6046;
`;

const ButtonPlaySubtitle = styled(Subtitle)`
  margin-top: 5px;
  font-size: 15px;
  text-align: start;
  transition: 0.5 all;
`;

export const ButtonPlay = styled(Link)`
  margin-top: 84px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 19vw;
  height: 11vh;
  background: none;
  border-radius: 10px;
  border: 2px solid #636363;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    border: 2px solid #ff6046;
    ${ButtonPlaySubtitle} {
      color: #ff6046;
    }
  }

  text-decoration: none;
`;

const Steam = styled.img`
  display: inline;
  width: 50px;
  height: 50px;
`;

const ButtonPlayLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonPlayTitle = styled.div`
  width: 216px;
  color: #fff;
  text-align: center;
  text-shadow: 3px 0px 0.6px #000;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;



const FirstSection = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Welcome to the Dota heroes portal</Title>
          <Subtitle>-ZAHARKHACH</Subtitle>
          <Hr />
          <ButtonPlay
            to="https://store.steampowered.com/app/570/Dota_2/"
            target="_blank"
          >
            <Steam alt="steam" src={logo} />
            <ButtonPlayLeftSide>
              <ButtonPlayTitle>play for free</ButtonPlayTitle>
              <ButtonPlaySubtitle>download on steam</ButtonPlaySubtitle>
            </ButtonPlayLeftSide>
          </ButtonPlay>
        </Container>
      </Wrapper>
    </>
  );
};

export default FirstSection;
