import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import background from "../assets/images/single_hero_bg.jpg";
import { GlobalWrapper } from "../components/globalStyled/GlobalStyled";

import Abilities from "../components/SingleHero/Abilities/Abilities";

const Wrapper = styled(GlobalWrapper)`
  background: center center/cover no-repeat;
  background-image: url(${background});
  height: 200vh;
`;
const Back = styled(Link)`
  margin-left: 10px;
  color: #CECECE;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(0, 0, 0, 0.8);
`;
const Container = styled.div`
  max-width: 95vw;
  margin: 0 auto;
`;
const ComponentsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const Test2 = styled.div`
  width: 33.33%;
  min-height: 300px;
  background: red;
`;
const Test3 = styled.div`
  width: 41.67%;
  min-height: 300px;
  background: #00ffe1;
`;
const SingleHeroPege = () => {
  useEffect(() => {
    // Прокрутка страницы вверх при монтировании компонента
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Back to={`/heroes/`}>SEE ALL HEROES</Back>
      <Container>
        <ComponentsWrapper>
          <Abilities/>
        </ComponentsWrapper>
      </Container>
    </Wrapper>
  );
};

export default SingleHeroPege;
