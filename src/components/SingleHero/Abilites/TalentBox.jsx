import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const Title = styled.div`
  margin-top: 10px;
  color: #fff;
  text-align: center;
  text-shadow: 3px 1px 3.8px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
const TalentsBox = styled.div`
  position: relative;
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 77%;
  align-items: center;
`;
const SingleTalentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 366px;
  height: 51px;
  background: linear-gradient(270deg, #080808 0.18%, #57595d 188.25%);
`;
const SingleTalentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 151px;
  color: #fff;
  text-align: center;
  font-family: "Hypatia", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SingleTalentNumber25 = styled.div`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 43%;
  top: -1%;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #080808;
    border-radius: 100%;
    filter: blur(2.8499999046325684px);
  }
`;
const SingleTalentNumber20 = styled(SingleTalentNumber25)`
  top: 25%;
`;
const SingleTalentNumber15 = styled(SingleTalentNumber25)`
  top: 52%;
`;
const SingleTalentNumber10 = styled(SingleTalentNumber25)`
  top: 78%;
`;
const Number = styled.span`
  margin-top: 5px;
  color: #f2c777;
  text-align: center;
  font-family: "Hypatia", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 1;
`;
const Talents = ({ active, talents }) => {
  const Wrapper = styled.div`
    width: 404px;
    height: 326px;
    position: absolute;
    background: linear-gradient(46deg, #57595d 0.49%, #303541 82.42%);
    box-shadow: 0px 0px 21.5px 7px #000;
    right: -17%;
    bottom: 110%;

    opacity: 0;
    transition: opacity 1s ease;

    ${active &&
    `
      opacity: 1;
    `}
  `;

  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: active ? 1 : 0 }} // Animated state based on the 'active' prop
      transition={{ duration: 0.3 }}
    >
      <Title>TALENT TREE</Title>
      <TalentsBox>
        {talents.map((talent, index) => (
          <SingleTalentBox key={index}>
            <SingleTalentText>{talent.left}</SingleTalentText>
            <SingleTalentText>{talent.right}</SingleTalentText>
          </SingleTalentBox>
        ))}

        <SingleTalentNumber25>
          <Number>25</Number>
        </SingleTalentNumber25>

        <SingleTalentNumber20>
          <Number>20</Number>
        </SingleTalentNumber20>

        <SingleTalentNumber15>
          <Number>15</Number>
        </SingleTalentNumber15>
        <SingleTalentNumber10>
          <Number>10</Number>
        </SingleTalentNumber10>
      </TalentsBox>
    </Wrapper>
  );
};

export default Talents;
