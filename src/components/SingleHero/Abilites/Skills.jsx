import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { activeAbilityChanged } from "../../Heroes/slices/HeroSlice";

import Talents from "./TalentBox";

import { useState } from "react";

import talentImg from "../../../assets/icons/talents.png";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 14px;
`;
const ImgWrapper = styled.div`
  width: 100px;
  height: 131.854px;
`;
const Img = styled.img`
  filter: saturate(0) brightness(0.6);
  width: 100%;
  box-shadow: 0px 0px 8.9px 3px #000;

  &.active {
    filter: none;
  }
`;
const TalentImg = styled(Img)`
  filter: none;
  box-shadow: none;
`;

const Skills = ({ skills }) => {
  const [activeTalentBlock, setActiveTalentBlock] = useState(false);
  const dispatch = useDispatch();
  console.log(skills)
  dispatch(activeAbilityChanged(skills[0].heroName));

  const active = useSelector((state) => state.heroAbility.activeAbility);

  const handleHoverStart = () => {
    setActiveTalentBlock(true);
  };

  const handleHoverEnd = () => {
    setActiveTalentBlock(false);
  };
  const hangleOnClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <Wrapper>
        <ImgBox>
          <ImgWrapper as={motion.div} whileHover={{ scale: 1.1 }}>
            <Img
              className="active"
              onClick={hangleOnClick}
              img={"asdasd"}
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png"
            />
          </ImgWrapper>
          <ImgWrapper as={motion.div} whileHover={{ scale: 1.1 }}>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png" />
          </ImgWrapper>
          <ImgWrapper as={motion.div} whileHover={{ scale: 1.1 }}>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>
          <ImgWrapper as={motion.div} whileHover={{ scale: 1.1 }}>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>
        </ImgBox>
        <ImgWrapper
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <TalentImg src={talentImg} />
        </ImgWrapper>
        <Talents active={activeTalentBlock} />
      </Wrapper>
    </>
  );
};

export default Skills;
