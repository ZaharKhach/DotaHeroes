import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 14px 33px 24px 14px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  background: #080808;
`;
const ImgWrapper = styled.div`
  width: 100px;
  height: 103px;
`;
const Img = styled.img`
  width: 100%;
`;
const TextBlock = styled.div`
  width: 401px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
const Title = styled.h2`
  margin: 0;
  color: #fff;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Desc = styled.div`
  color: #fff;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Header = () => {
  return (
    <HeaderBox>
      <ImgWrapper>
        <Img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png" />
      </ImgWrapper>

      <TextBlock>
        <Title>Mana break</Title>
        <Desc>
          Sprays high-pressure acid across a target area. Enemy units who step
          across the contaminated terrain take damage per second and have their
          armor reduced.
        </Desc>
      </TextBlock>
    </HeaderBox>
  );
};

export default Header;
