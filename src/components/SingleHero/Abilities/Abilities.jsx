import styled from "styled-components";

const Wrapper = styled.div`
  width: 25%;
`;

const Title = styled.h2`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 30px;
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

const HealthText = styled.div`
  margin-top: 23px;
  color: #cecece;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  text-transform: uppercase;
`;

const ManaText = styled(HealthText)`
  margin-top: 7px;
`;

const Health = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  border-radius: 4px;
  background: radial-gradient(
    2024.47% 52.39% at 50% 51.35%,
    #0c9200 0%,
    #0a3104 100%
  );
`;
const Mana = styled(Health)`
  background: radial-gradient(
    2024.47% 52.39% at 50% 51.35%,
    #005592 0%,
    #04312c 100%
  );
`;

const HealthNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HealthRegen = styled(HealthNumber)`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-150%, -50%);
  font-size: 18px;
`;
const AttributesBox = styled.div`
  margin-top: 15px;
  grid-template-columns: 2fr 2fr 2fr;
  display: grid;
  grid-gap: 15px;
`;
const AttackBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AttackTitle = styled(HealthText)`
  margin-bottom: 14px;
  text-align: center;
`;
const AttackRow = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AttackImgWrapper = styled.div`
  max-width: 33px;
`;
const AttackImg = styled(Img)`
  box-shadow: none;
`;
const AtteckText = styled.div`
  width: 52px;
  height: 26px;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DefenceBlock = styled(AttackBlock)`
  justify-content: start;
`;
const DefenceRow = styled(AttackRow)`
  width: 70%;
`;


const Abilities = () => {
  return (
    <Wrapper>
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

      <HealthText>health</HealthText>
      <Health>
        <HealthNumber>120</HealthNumber>
        <HealthRegen>+2.6</HealthRegen>
      </Health>
      <ManaText>mana</ManaText>
      <Mana>
        <HealthNumber>219</HealthNumber>
        <HealthRegen>+0.6</HealthRegen>
      </Mana>

      <AttributesBox>
        <AttackBlock>
          <AttackTitle>attack</AttackTitle>
          <AttackRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" />
            </AttackImgWrapper>
            <AtteckText>48-45</AtteckText>
          </AttackRow>

          <AttackRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" />
            </AttackImgWrapper>
            <AtteckText>0.4</AtteckText>
          </AttackRow>

          <AttackRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" />
            </AttackImgWrapper>
            <AtteckText>150</AtteckText>
          </AttackRow>
        </AttackBlock>

        <DefenceBlock>
          <AttackTitle>DEFENSE</AttackTitle>
          <DefenceRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" />
            </AttackImgWrapper>
            <AtteckText>1.0</AtteckText>
          </DefenceRow>
        </DefenceBlock>

        <DefenceBlock>
          <AttackTitle>MOBILITY</AttackTitle>
          <AttackRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" />
            </AttackImgWrapper>
            <AtteckText>310</AtteckText>
          </AttackRow>
          
          <AttackRow>
            <AttackImgWrapper>
              <AttackImg src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" />
            </AttackImgWrapper>
            <AtteckText>1900</AtteckText>
          </AttackRow>
        </DefenceBlock>
      </AttributesBox>

      
    </Wrapper>
  );
};

export default Abilities;
