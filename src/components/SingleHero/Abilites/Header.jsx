import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectHeroActiveAbility } from "../../Heroes/slices/HeroSlice";

const HeaderBox = styled.div`
  padding: 14px 33px 24px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Header = ({ skills }) => {
  const active = useSelector(selectHeroActiveAbility);
  const imgSrcBase = "https://cdn.cloudflare.steamstatic.com/";
  console.log(skills);
  console.log(active);
  return (
    <>
      {skills.map((skill, index) =>
        skill.heroName === active ? (
          <HeaderBox key={index}>
            <ImgWrapper>
              <Img src={`${imgSrcBase}${skill.img}`} />
            </ImgWrapper>

            <TextBlock>
              <Title>{skill.dname}</Title>
              <Desc>{skill.desc} </Desc>
            </TextBlock>
          </HeaderBox>
        ) : null
      )}
    </>
  );
};

export default Header;
