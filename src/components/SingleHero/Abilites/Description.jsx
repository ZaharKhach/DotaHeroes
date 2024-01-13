import styled from "styled-components";

import cd from "../../../assets/icons/cd.png";
import mana from "../../../assets/icons/mana.png";

import { useSelector } from "react-redux";
import { selectHeroActiveAbility } from "../../Heroes/slices/HeroSlice";

const Wrapper = styled.div`
  background-color: #000;
  padding: 15px 21px 15px 20px;
`;
const FirstBox = styled.div`
  width: 539px;
  display: flex;
  justify-content: space-between;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const BoxItem = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: start;
`;
const AtributeName = styled.span`
  color: #959595;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;
const AtributeDesc = styled.span`
  margin-left: 2px;
  color: #fff;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const AtributeDamage = styled(AtributeDesc)`
  color: #ffffff;
  &.Pure {
    color: #ff9900;
  }
  &.Magical {
    color: #00aeff;
  }
  &.Physical {
    color: red;
  }
`;
const SecondBox = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const SecondBoxBlock = styled(Block)`
  width: 100%;
  flex-direction: row;
  margin-top: 8px;
`;
const SecondAtributeDesc = styled(AtributeDesc)`
  margin-left: 20px;
`;
const ThirdBox = styled.div`
  margin-top: 38px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ThirdBoxItem = styled.div`
  width: 40%;
  display: flex;
`;
const ThirdBoxText = styled.span`
  margin-left: 10px;
  color: #fff;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
`;
const ThirdBoxImg = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
`;
const Description = ({ skills }) => {
  const active = useSelector(selectHeroActiveAbility);

  console.log(skills);
  return (
    <>
      {skills.map((skill, index) =>
        skill.heroName === active ? (
          <Wrapper key={index}>
            <FirstBox>
              <Block>
                {skill.behavior ? (
                  <BoxItem>
                    <AtributeName>ABILITY:</AtributeName>
                    <AtributeDesc>{`${skill.behavior}`}</AtributeDesc>
                  </BoxItem>
                ) : null}

                {skill.dmg_type ? (
                  <BoxItem>
                    <AtributeName>DAMAGE TYPE:</AtributeName>
                    <AtributeDamage className={skill.dmg_type}>
                      {skill.dmg_type}
                    </AtributeDamage>
                  </BoxItem>
                ) : null}
              </Block>
              <Block>
                {skill.bkbpierce ? (
                  <BoxItem>
                    <AtributeName>PIERCES SPELL IMMUNITY:</AtributeName>
                    <AtributeDesc>{skill.bkbpierce}</AtributeDesc>
                  </BoxItem>
                ) : null}

                {skill.dispellable ? (
                  <BoxItem>
                    <AtributeName>DISPELLABLE:</AtributeName>
                    <AtributeDesc>{skill.dispellable}</AtributeDesc>
                  </BoxItem>
                ) : null}
              </Block>
            </FirstBox>

            <SecondBox>
              {skill.attrib.map((item, index) => (
                <SecondBoxBlock key={index}>
                  <AtributeName>{item.header}</AtributeName>
                  <SecondAtributeDesc>
                    {Array.isArray(item.value)
                      ? item.value.join(" / ")
                      : item.value}
                  </SecondAtributeDesc>
                </SecondBoxBlock>
              ))}
            </SecondBox>

            <ThirdBox>
              {skill.cd ? (
                <ThirdBoxItem>
                  <ThirdBoxImg src={cd} />
                  <ThirdBoxText>
                    {Array.isArray(skill.cd) ? skill.cd.join(" / ") : skill.cd}
                  </ThirdBoxText>
                </ThirdBoxItem>
              ) : null}

              {skill.mc ? (
                <ThirdBoxItem>
                  <ThirdBoxImg src={mana} />
                  <ThirdBoxText>{Array.isArray(skill.mc) ? skill.mc.join(" / ") : skill.mc}</ThirdBoxText>
                </ThirdBoxItem>
              ) : null}
            </ThirdBox>
          </Wrapper>
        ) : null
      )}
    </>
  );
};

export default Description;
