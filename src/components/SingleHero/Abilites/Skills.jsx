import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { v4 as uuid } from "uuid";

import { activeAbilityChanged, selectHeroActiveAbility } from "../../Heroes/slices/HeroSlice";

import Talents from "./TalentBox";

import { useState } from "react";
import { useEffect } from "react";

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
  height: 100px;
  cursor: pointer;
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

const Skills = ({ skills, talents }) => {
  const [activeTalentBlock, setActiveTalentBlock] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeAbilityChanged(skills[0].heroName));
  }, [dispatch, skills]);

  const active = useSelector(selectHeroActiveAbility);

  const handleHoverStart = () => {
    setActiveTalentBlock(true);
  };

  const handleHoverEnd = () => {
    setActiveTalentBlock(false);
  };
  const hangleOnClick = (e) => {
    const skillName = e.target.getAttribute('data-name');
    dispatch(activeAbilityChanged(skillName));

  };

  return (
    <>
      <Wrapper>
        <ImgBox>
          {skills.map((item) => (
            item.behavior !== "Hidden" ? (
              <ImgWrapper
              key={uuid()}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              onClick={hangleOnClick}
            >
              <Img
                className={active === item.heroName ? "active" : ""}
                src={`https://cdn.cloudflare.steamstatic.com${item.img}`}
                data-name={item.heroName}
              />
            </ImgWrapper>
            ) : (
              null
            )
          ))}
        </ImgBox>
        <ImgWrapper
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <TalentImg src={talentImg} />
        </ImgWrapper>
        <Talents talents={talents} active={activeTalentBlock} />
      </Wrapper>
    </>
  );
};

export default Skills;
