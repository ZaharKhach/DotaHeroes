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

const AttackTitle = styled(TitleBase)``;

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

const Characteristics = () => {
  return (
    <AttributesBox>
      <AttackBlock>
        <AttackTitle>attack</AttackTitle>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" />
          </ImgWrapper>
          <Text>48-45</Text>
        </RowBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" />
          </ImgWrapper>
          <Text>1.4</Text>
        </RowBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" />
          </ImgWrapper>
          <Text>150</Text>
        </RowBase>
      </AttackBlock>

      <DefenceBlock>
        <TitleBase>DEFENSE</TitleBase>
        <DefenceRow>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" />
          </ImgWrapper>
          <Text>1.0</Text>
        </DefenceRow>
      </DefenceBlock>

      <MobilityBlock>
        <TitleBase>MOBILITY</TitleBase>
        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" />
          </ImgWrapper>
          <Text>310</Text>
        </RowBase>

        <RowBase>
          <ImgWrapper>
            <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" />
          </ImgWrapper>
          <Text>1900</Text>
        </RowBase>
      </MobilityBlock>
    </AttributesBox>
  );
};

export default Characteristics;
