import React from "react";
import styled from "styled-components";
import {
  AttributesBox,
  BlockBase,
  RowBase,
  TitleBase,
} from "../../globalStyled/GlobalStyled";

const StatsRow = styled(RowBase)`
  width: 100%;
`;
const ImgWrapper = styled.div`
  max-width: 60px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #fff;
  text-align: center;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const LittleText = styled(Text)`
  display: inline;
  color: #cecece;
`;

const Stats = ({data}) => {
  const {
    str,
    int,
    agi,
    strGain,
    agiGain,
    intGain
  } = data;
  
  return (
    <AttributesBox>
      <BlockBase>
        <TitleBase>STRENGTH</TitleBase>
        <StatsRow>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" />
          </ImgWrapper>
          <Text>
            {str} <LittleText>+{strGain}</LittleText>
          </Text>
        </StatsRow>
      </BlockBase>
      <BlockBase>
        <TitleBase>AGILITY</TitleBase>
        <StatsRow>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" />
          </ImgWrapper>
          <Text>
            {agi} <LittleText>+{agiGain}</LittleText>
          </Text>
        </StatsRow>
      </BlockBase>
      <BlockBase>
        <TitleBase>INTELLECT</TitleBase>
        <StatsRow>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" />
          </ImgWrapper>
          <Text>
            {int} <LittleText>+{intGain}</LittleText>
          </Text>
        </StatsRow>
      </BlockBase>
    </AttributesBox>
  );
};

export default Stats;
