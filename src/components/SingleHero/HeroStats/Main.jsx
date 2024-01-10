import styled from "styled-components";

import HealthAndMana from "./HealthAndMana";
import Сharacteristics from "./Сharacteristics";
import Stats from "./Stats";

const Wrapper = styled.div`
  margin-top: 80px;
`;

const Abilities = ({ heroStats }) => {
  const {
    health,
    healthRegen,
    mana,
    manaRegen,
    attackMin,
    attackMax,
    attackRate,
    atackRange,
    armor,
    moveSpeed,
    dayVision,
    nightVision,
    str,
    int,
    agi,
    strGain,
    agiGain,
    intGain,
  } = heroStats;

  const healthAndMana = {
    health,
    healthRegen,
    mana,
    manaRegen,
  };

  const characteristics = {
    attackMin,
    attackMax,
    attackRate,
    atackRange,
    armor,
    moveSpeed,
    dayVision,
    nightVision,
  };

  const stats = {
    str,
    int,
    agi,
    strGain,
    agiGain,
    intGain,
  };
  return (
    <Wrapper>
      <HealthAndMana data={healthAndMana} />
      <Сharacteristics data={characteristics} />
      <Stats  data={stats}/>
    </Wrapper>
  );
};

export default Abilities;
