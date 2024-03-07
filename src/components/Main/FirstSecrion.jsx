import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import background from "../../assets/images/first_bg.png";
import logo from "../../assets/icons/steam.png";
import { GlobalWrapper, Container } from "../globalStyled/GlobalStyled";

const Wrapper = styled(GlobalWrapper)`
  padding: 100px 0px 293px 0px;
  background-image: url(${background});
`;

const Title = styled.h1`
  margin: 0;
  width: 45%;
  color: #fff;
  font-size: 8.4vh;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 1445px) {
    width: 55%;
  }
  @media (max-width: 1186px) {
    width: 58%;
  }
  @media (max-width: 1120px) {
    width: 60%;
  }
  @media (max-width: 1064px) {
    font-size: 7.7vh;
  }
  @media (max-width: 976px) {
    font-size: 7vh;
  }
  @media (max-width: 886px) {
    font-size: 6.7vh;
  }
  @media (max-width: 850px) {
    font-size: 6vh;
  }
  @media (max-width: 768px) {
    width: 62%;
    font-size: 5.7vh;
  }
  @media (max-width: 721px) {
    font-size: 5vh;
  }
  @media (max-width: 634px) {
    font-size: 4.7vh;
  }
  @media (max-width: 596px) {
    width: 87%;
  }
  @media (max-width: 352px) {
    font-size: 4vh;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #a7a7a7;
  font-family: "Inter";
  font-size: 2.94vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2.54vh;
  }
  @media (max-width: 426px) {
    font-size: 2.4vh;
  }
`;

export const Hr = styled.div`
  margin-top: 11.26vh;
  width: 40%;
  height: 0.67vh;
  background: #ff6046;
  @media (max-width: 769px) {
    width: 60%;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
`;

export const ButtonPlay = styled(Link)`
  margin-top: 11.26vh;
  display: flex;
  justify-content: space-around;
  padding: 0px 1.3vw 0px 1.3vw;
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
  }
  text-decoration: none;
  @media (max-width: 1024px) {
    width: 23vw;
  }
  @media (max-width: 768px) {
    width: 25vw;
  }
  @media (max-width: 426px) {
    height: 9vh;

    width: 45vw;
  }
  @media (max-width: 376px) {
    width: 45vw;
  }
`;

export const Steam = styled.img`
  display: inline;
  width: 3.5vw;
  @media (max-width: 768px) {
    width: 6vw;
  }
  @media (max-width: 426px) {
    width: 10vw;
  }
`;

export const ButtonPlayLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonPlayTitle = styled.div`
  width: 14.08vw;
  color: #fff;
  text-align: center;
  text-shadow: 3px 0px 0.6px #000;
  font-size: 3vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: left;
  @media (max-width: 1024px) {
    width: 18vw;
  }
  @media (max-width: 860px) {
    font-size: 2.9vh;
  }
  @media (max-width: 835px) {
    font-size: 2.8vh;
  }
  @media (max-width: 805px) {
    font-size: 2.6vh;
  }
  @media (max-width: 768px) {
    font-size: 2.2vh;
    text-align: left;
  }
  @media (max-width: 635px) {
    font-size: 2vh;
    text-align: left;
  }
  @media (max-width: 575px) {
    font-size: 1.8vh;
    text-align: left;
  }
  @media (max-width: 515px) {
    font-size: 1.7vh;
    text-align: left;
  }
  @media (max-width: 426px) {
    width: 30vw;
  }
  @media (max-width: 376px) {
    font-size: 2vh;
  }
  @media (max-width: 321px) {
    font-size: 1.8vh;
  }
`;
export const ButtonPlaySubtitle = styled(Subtitle)`
  margin-top: 0.67vh;
  font-size: 2.14vh;
  text-align: start;
  transition: 0.5 all;
  text-align: left;
  @media (max-width: 835px) {
    font-size: 2vh;
  }
  @media (max-width: 768px) {
    font-size: 1.9vh;
    text-align: left;
  }
  @media (max-width: 738px) {
    font-size: 1.8vh;
    text-align: left;
  }
  @media (max-width: 700px) {
    font-size: 1.7vh;
    text-align: left;
  }
  @media (max-width: 635px) {
    font-size: 1.6vh;
    text-align: left;
  }
  @media (max-width: 426px) {
    font-size: 2vh;
  }
  @media (max-width: 376px) {
    font-size: 1.6vh;
  }
  @media (max-width: 321px) {
    font-size: 1.5vh;
  }
`;

const FirstSection = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <motion.div
            initial={{ x: "-5%", opacity: "0%" }}
            animate={{ x: "0%", opacity: "100%" }}
            transition={{ duration: 1.5 }}
          >
            <Title>Welcome to the Dota heroes portal</Title>
            <Subtitle>-ZAHARKHACH</Subtitle>
          </motion.div>
          <Hr
            as={motion.div}
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 3 }}
          />

          <motion.div
            initial={{ x: "-5%", opacity: "0%" }}
            animate={{ x: "0%", opacity: "100%" }}
            transition={{ duration: 1.5 }}
          >
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
          </motion.div>
        </Container>
      </Wrapper>
    </>
  );
};

export default FirstSection;
