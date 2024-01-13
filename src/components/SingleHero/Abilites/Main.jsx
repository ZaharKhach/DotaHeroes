import React from "react";
import styled from "styled-components";

import Video from "./Video";
import Skills from "./Skills";
import Header from "./Header";
import Description from "./Description";
import {
  useGetDotaAbilitiesQuery,
  useGetDotaHeroAbilitiesQuery,
} from "../../../api/dota";

const Title = styled.h2`
  display: block;
  margin: 0 auto;
  margin-top: 52px;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
const AbilitesBox = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 887px 580px;
  position: relative;
`;
const VideoBlock = styled.div`
  padding: 0px 12px 40px 12px;
  position: relative;
`;
const DescriptionBlock = styled.div``;

const Main = ({ heroAbilities, AllAbilities }) => {
  const { abilities } = heroAbilities;
  const { talents } = heroAbilities;
  let abilitiesInfo = [];
  let talentsInfo = [];

  abilitiesInfo = abilities.map((ability) => {
    for (let key in AllAbilities) {
      if (key === ability) {
        return {
          ...AllAbilities[key],
          heroName: key,
        };
      }
    }
  });

  talentsInfo = talents.reduce((acc, talent, index) => {
    for (let key in AllAbilities) {
      if (talent.name && talent.name === key) {
        const currentRight = AllAbilities[key].dname;
        const nextLeft = talents[index + 1]
          ? AllAbilities[talents[index + 1].name].dname
          : null;
        if (index % 2 === 0) {
          const obj = {
            right: currentRight,
            left: nextLeft,
          };
          acc.push(obj);
        }
      }
    }
    return acc;
  }, []).reverse();

  return (
    <>
      <Title>abilities</Title>
      <AbilitesBox>
        <VideoBlock>
          <Video abilities={abilities} />
          <Skills skills={abilitiesInfo} talents={talentsInfo} />
        </VideoBlock>
        <DescriptionBlock>
          <Header />
          <Description />
        </DescriptionBlock>
      </AbilitesBox>
    </>
  );
};

export default Main;
