import React from "react";
import styled from "styled-components";

import Video from "./Video";
import Skills from "./Skills";

const Title = styled.h2`
  display: block;
  margin: 0 auto;
  margin-top: 52px;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 0px #000;
  font-family: "Hypatia", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
const AbilitesBox = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 887px 580px;
`;
const VideoBlock = styled.div`
  padding: 0px 12px 40px 12px;
  position: relative;
`;
const DescriptionBlock = styled.div``;

const Main = () => {
  return (
    <>
      <Title>abilities</Title>
      <AbilitesBox>
        <VideoBlock>
          <Video />
          <Skills />
        </VideoBlock>
        <DescriptionBlock> </DescriptionBlock>
      </AbilitesBox>
    </>
  );
};

export default Main;
