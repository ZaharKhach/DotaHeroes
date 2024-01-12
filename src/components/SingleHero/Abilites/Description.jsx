import styled from "styled-components";

import cd from "../../../assets/icons/cd.png";
import mana from "../../../assets/icons/mana.png";

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
  color: red;
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
  width: 25%;
  display: flex;
  justify-content: space-between;
`;
const ThirdBoxText = styled.span`
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
const Description = () => {
  return (
    <Wrapper>
      <FirstBox>
        <Block>
          <BoxItem>
            <AtributeName>ABILITY:</AtributeName>
            <AtributeDesc>Passive</AtributeDesc>
          </BoxItem>
          <BoxItem>
            <AtributeName>DAMAGE TYPE:</AtributeName>
            <AtributeDamage>Physical</AtributeDamage>
          </BoxItem>
          <BoxItem>
            <AtributeName>AFFECTS:</AtributeName>
            <AtributeDesc>Enemy Heroes</AtributeDesc>
          </BoxItem>
        </Block>
        <Block>
          <BoxItem>
            <AtributeName>PIERCES SPELL IMMUNITY:</AtributeName>
            <AtributeDesc>Yes</AtributeDesc>
          </BoxItem>
          <BoxItem>
            <AtributeName>DISPELLABLE:</AtributeName>
            <AtributeDesc>Yes</AtributeDesc>
          </BoxItem>
        </Block>
      </FirstBox>

      <SecondBox>
        <SecondBoxBlock>
          <AtributeName>MANA BURNED AS DAMAGE:</AtributeName>
          <SecondAtributeDesc>50%</SecondAtributeDesc>
        </SecondBoxBlock>

        <SecondBoxBlock>
          <AtributeName>MANA BURNED PER HIT:</AtributeName>
          <SecondAtributeDesc>25/30/35/40</SecondAtributeDesc>
        </SecondBoxBlock>

        <SecondBoxBlock>
          <AtributeName>MAX MANA BURNED PER HIT:</AtributeName>
          <SecondAtributeDesc>1.6%/2.4%/3.2%/4% </SecondAtributeDesc>
        </SecondBoxBlock>

        <SecondBoxBlock>
          <AtributeName>ILLUSION PERCENTAGE:</AtributeName>
          <SecondAtributeDesc>50</SecondAtributeDesc>
        </SecondBoxBlock>

        <SecondBoxBlock>
          <AtributeName>MOVE SPEED SLOW ON FULL DRAIN:</AtributeName>
          <SecondAtributeDesc>1.6%/2.4%/3.2%/4%</SecondAtributeDesc>
        </SecondBoxBlock>

        <SecondBoxBlock>
          <AtributeName>SLOW DURATION:</AtributeName>
          <SecondAtributeDesc>0.75</SecondAtributeDesc>
        </SecondBoxBlock>
      </SecondBox>

      <ThirdBox>
        <ThirdBoxItem>
          <ThirdBoxImg src={cd} />
          <ThirdBoxText>25/30/35/40</ThirdBoxText>
        </ThirdBoxItem>

        <ThirdBoxItem>
          <ThirdBoxImg src={mana} />
          <ThirdBoxText>25/30/35/40</ThirdBoxText>
        </ThirdBoxItem>
      </ThirdBox>
    </Wrapper>
  );
};

export default Description;
