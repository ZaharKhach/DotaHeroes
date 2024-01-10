import React from "react";
import styled from "styled-components";

import talentImg from "../../../assets/icons/talents.png";

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
  width: 127px;
  height: 131.854px;
`;
const Img = styled.img`
  width: 100%;
`;



const Skills = () => {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>

          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
          </ImgWrapper>
        </ImgBox>
        <ImgWrapper>
          <Img src={talentImg} />
        </ImgWrapper>
      </Wrapper>
    </>
  );
};

export default Skills;
