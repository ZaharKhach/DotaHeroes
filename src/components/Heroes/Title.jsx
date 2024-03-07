import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../globalStyled/GlobalStyled";

const Title = () => {
  const Titleh1 = styled.h2`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 376px) {
      font-size: 1.61rem;
    }
  `;
  const TitleDescr = styled(Titleh1)`
    display: block;
    margin: 0 auto;
    width: 67.14vw;
    margin-top: 2.54vh;
    font-size: 1.8em;
    text-transform: none;
    @media (max-width: 1435px) {
      font-size: 1.7em;
    }
    @media (max-width: 1325px) {
      font-size: 1.6em;
    }
    @media (max-width: 1024px) {
      font-size: 1.2em;
    }
    @media (max-width: 769px) {
      font-size: 0.9rem;
    }
    @media (max-width: 426px) {
      width: 90.14vw;
    }
    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
  `;

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 2 }}
      >
        <Titleh1>CHOOSE YOUR HERO</Titleh1>
        <TitleDescr>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </TitleDescr>
      </motion.div>
    </Container>
  );
};

export default Title;
