import styled from "styled-components";

import Abilites from "./Abilites";
import HealthAndMana from "./HealthAndMana";
import Сharacteristics from "./Сharacteristics";
import Stats from "./Stats";

const Wrapper = styled.div`
margin-top: 80px;
`;



const Abilities = () => {
  return (
    <Wrapper>
      <Abilites />
      <HealthAndMana />
      <Сharacteristics />
      <Stats/>
    </Wrapper>
  );
};

export default Abilities;
