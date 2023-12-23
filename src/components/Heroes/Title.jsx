import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../globalStyled/GlobalStyled";

const Title = () => {
  const Titleh1 = styled.h2`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  `;
  const TitleDescr = styled(Titleh1)`
    display: block;
    margin: 0 auto;
    width: 53vw;
    margin-top: 19px;
    font-size: 1.5rem;
    text-transform: none;
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
