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
  font-family: "Hypatia", sans-serif;
  letter-spacing: 1.5px;
`;

const ManaText = styled(HealthText)`
  margin-top: 7px;
`;

const Health = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  border-radius: 4px;
  background: linear-gradient(270deg, #0c9200 49.49%, #0a3104 102.39%);
`;
const Mana = styled(Health)`
  background: linear-gradient(270deg, #005592 50.71%, #04312c 102.39%);
`;

const HealthNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: "Hypatia", sans-serif;
  font-size: 27px;
`;
const HealthRegen = styled(HealthNumber)`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-150%, -50%);
  font-size: 18px;
  font-family: "Hypatia", sans-serif;
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
