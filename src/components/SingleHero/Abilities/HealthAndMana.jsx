import React from "react";
import styled from "styled-components";

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
  font-size: 25px;
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

const HealthAndMana = () => {
  return (
    <>
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
    </>
  );
};

export default HealthAndMana;
