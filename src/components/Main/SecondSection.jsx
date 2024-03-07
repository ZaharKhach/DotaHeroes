import React from "react";
import styled from "styled-components";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

import background from "../../assets/images/second_bg.png";
import { GlobalWrapper } from "../globalStyled/GlobalStyled";

import { formatNumberWithDots } from "../../fucntions";

const Wrapper = styled(GlobalWrapper)`
  display: flex;
  justify-content: space-around;
  background-image: url(${background});
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InfoTitle = styled.h2`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 6.7vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 769px) {
    font-size: 5.7vh;
  }
  @media (max-width: 576px) {
    font-size: 4.7vh;
  }
  @media (max-width: 426px) {
    font-size: 3.7vh;
  }
  @media (max-width: 326px) {
    font-size: 3vh;
  }
`;
const InfoCount = styled(InfoTitle)`
  margin-top: 4.95vh;
  font-size: 7.7vh;
  @media (max-width: 769px) {
    font-size: 5.7vh;
  }
  @media (max-width: 576px) {
    font-size: 4.7vh;
  }
  @media (max-width: 426px) {
    font-size: 3.7vh;
  }
  @media (max-width: 326px) {
    font-size: 3vh;
  }
`;

const SecondSection = ({ players, matches }) => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const playersCount = useMotionValue(players / 2);
  const matchesCount = useMotionValue(matches / 2);

  const Playersrounded = useTransform(playersCount, (latest) =>
    formatNumberWithDots(Math.round(latest))
  );
  const matchesRounded = useTransform(matchesCount, (latest) =>
    formatNumberWithDots(Math.round(latest))
  );

  useEffect(() => {
    const scrollHandler = () => {
      const scrollThreshold = 0.3;
      const shouldAnimate = scrollYProgress.current > scrollThreshold;
      if (shouldAnimate) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        animate(playersCount, players, { duration: 0.3 });
        animate(matchesCount, matches, { duration: 0.3 });
      } else {
        controls.start({ opacity: 0, y: 100, transition: { duration: 1 } });
      }
    };

    scrollHandler();

    const unsubscribeScroll = scrollYProgress.on("change", scrollHandler);
    return () => {
      unsubscribeScroll();
    };
  }, [controls, scrollYProgress, playersCount, players, matches, matchesCount]);

  return (
    <Wrapper>
      <InfoWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <InfoTitle>Players</InfoTitle>
        <InfoCount as={motion.h2}>{Playersrounded}</InfoCount>
      </InfoWrapper>
      <InfoWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <InfoTitle>Matches last day</InfoTitle>
        <InfoCount as={motion.h2}>{matchesRounded}</InfoCount>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SecondSection;
