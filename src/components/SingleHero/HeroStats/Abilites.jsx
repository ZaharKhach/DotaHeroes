import React from "react";
import styled from "styled-components";

const Title = styled.div`
  margin: 0;
  color: #cecece;
  text-align: left;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  font-family: 'Hypatia', sans-serif;
  letter-spacing: 1.5px;
`;

const ImgBox = styled.div`
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
