import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";

import background from "../../assets/images/third_bg.png";
import { Link } from "react-router-dom";
import { GlobalWrapper, Container } from "../globalStyled/GlobalStyled";

const Wrapper = styled(GlobalWrapper)`
  height: 120vh;
  padding-top: 13.4vh;
  padding-bottom: 18.36vh;
  background-image: url(${background});
`;

const Title = styled.h1`
  margin: 0;
  color: #c14836;
  text-align: center;
  font-size: 8.57vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: 54px;
  }
  @media (max-width: 768px) {
    font-size: 46px;
  }
  @media (max-width: 426px) {
    font-size: 40px;
  }
`;

const CloseTitle = styled(Title)`
  color: #fff;
  font-size: 10.72vh;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: 70px;
  }
  @media (max-width: 768px) {
    font-size: 60px;
  }
  @media (max-width: 426px) {
    font-size: 55px;
  }
`;

const Description = styled.div`
  margin-top: 14.61vh;
  color: #fff;
  text-align: center;
  font-size: 4.15vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 1024px) {
    font-size: 23.9px;
  }
  @media (max-width: 768px) {
    font-size: 18.6px;
  }
  @media (max-width: 426px) {
    margin-top: 50px;
    font-size: 17px;
  }
`;

const Hr = styled.div`
  width: 27.37vw;
  height: 0.67vh;
  background: #ff6046;
  margin: 16.75vh auto 0vh auto;
  @media (max-width: 1440px) {
    margin-top: 75px;
  }
  @media (max-width: 426px) {
    width: 300px;
  }
`;

const Button = styled(Link)`
  margin: 10.32vh auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.88vw;
  height: 12.46vh;
  background: none;
  border-radius: 10px;
  border: 0.26vh solid #636363;
  text-transform: uppercase;
  text-decoration: none;

  color: #fff;
  text-align: center;
  font-size: 3.35vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 300px;
    height: 83px;
    margin-top: 130px;
  }
`;

const ThirdSection = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const scrollHandler = () => {
      const scrollThreshold = 0.7; // Измените это значение по вашему усмотрению
      const shouldAnimate = scrollYProgress.current > scrollThreshold;
      if (shouldAnimate) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
      } else {
        controls.start({ opacity: 0, y: 100, transition: { duration: 1 } });
      }
    };

    scrollHandler(); // Вызываем сразу для начальной установки

    // Подписываемся на события скролла
    const unsubscribeScroll = scrollYProgress.on("change", scrollHandler);
    // Очистка подписки при размонтировании компонента
    return () => {
      unsubscribeScroll();
    };
  }, [controls, scrollYProgress]);
  return (
    <>
      <Wrapper>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <Title>who will you</Title>
            <CloseTitle>chose?</CloseTitle>
          </motion.div>
          <Description>
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Description>
          <Hr />
          <Button to="/heroes">SEE ALL CHARACTERS</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default ThirdSection;
