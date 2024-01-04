import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  color: #cecece;
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const ImgBox = styled.div`
  margin-top: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  grid-gap: 15px;
`;

const ImgWrapper = styled.div`
  max-width: 80px;
`;

const Img = styled.img`
  width: 100%;
  box-shadow: 0px 0px 8.9px 3px #000;
`;

const Abilites = () => {
  return (
    <>
      <Title>abilities</Title>
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
    </>
  );
};

export default Abilites;
