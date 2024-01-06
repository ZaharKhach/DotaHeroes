import React from "react";
import styled from "styled-components";

import {
  AttributesBox,
  BlockBase,
  TitleBase,
  RowBase,
} from "../../globalStyled/GlobalStyled";

const AttackBlock = styled(BlockBase)`
  justify-content: space-between;
`;

const DefenceBlock = styled(BlockBase)`
  justify-content: start;
`;

const AttackTitle = styled(TitleBase)`
  font-family: "Hypatia", sans-serif;
  letter-spacing: 1.6px;
`;

const DefenceRow = styled(RowBase)`
  width: 70%;
`;

const MobilityBlock = styled(DefenceBlock)``;

const ImgWrapper = styled.div`
  max-width: 33px;
`;

const Img = styled.img`
  width: 100%;
  box-shadow: 0px 0px 8.9px 3px #000;
`;

const Text = styled.div`
  width: 52px;
  height: 26px;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: normal;
`;

const Characteristics = ({data}) => {

  const {
    attackMin,
    attackMax,
    attackRate,
    atackRange,
    armor,
    moveSpeed,
    dayVision,
    nightVision
  } = data;
  
  return (
    <AttributesBox>
      <AttackBlock>
        <AttackTitle>attack</AttackTitle>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" />
          </ImgWrapper>
          <Text>{attackMin}-{attackMax}</Text>
        </RowBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" />
          </ImgWrapper>
          <Text>{attackRate}</Text>
        </RowBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" />
          </ImgWrapper>
          <Text>{atackRange}</Text>
        </RowBase>
      </AttackBlock>

      <DefenceBlock>
        <TitleBase>DEFENSE</TitleBase>
        <DefenceRow>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" />
          </ImgWrapper>
          <Text>{armor}.0</Text>
        </DefenceRow>
      </DefenceBlock>

      <MobilityBlock>
        <TitleBase>MOBILITY</TitleBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" />
          </ImgWrapper>
        <Text>{moveSpeed}</Text>
        </RowBase>

        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" />
          </ImgWrapper>
          <Text>{dayVision}/{nightVision}</Text>
        </RowBase>
      </MobilityBlock>
    </AttributesBox>
  );
};

export default Characteristics;
