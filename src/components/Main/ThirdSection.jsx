import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";

import background from "../../assets/images/third_bg.png";
import { Link } from "react-router-dom";
import { GlobalWrapper, Container } from "../globalStyled/GlobalStyled";

const Wrapper = styled(GlobalWrapper)`
  height: 120vh;
  padding-top: 100px;
  padding-bottom: 137px;
  background-image: url(${background});
`;

const Title = styled.h1`
  margin: 0;
  color: #c14836;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const CloseTitle = styled(Title)`
  color: #fff;
  font-size: 80px;
  text-transform: uppercase;
`;

const Description = styled.div`
  margin-top: 109px;
  color: #fff;
  text-align: center;
  font-size: 31px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Hr = styled.div`
  width: 420px;
  height: 5px;
  background: #ff6046;
  margin: 125px auto 0px auto;
`;

const Button = styled(Link)`
  margin: 77px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 351px;
  height: 93px;
  background: none;
  border-radius: 10px;
  border: 2px solid #636363;
  text-transform: uppercase;
  text-decoration: none;

  color: #fff;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    /* border: 2px solid #ff6046; */
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
