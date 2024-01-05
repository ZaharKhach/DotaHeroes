import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 693px;
  height: 684px;
  position: relative;
  z-index: 1;
`;

const Platform = styled.div`
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  width: 580px;
  height: 117px;
  border-radius: 100%;
  background: #3a3a3a;
  filter: blur(2px);
  box-shadow: 0px 10px white;
`;

const Hero = () => {
  return (
    <VideoContainer>
      <Video
        poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png"
        autoPlay
        muted
        preload="auto"
        loop
      >
        <source
          type="video/webm"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm"
        />
        <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" />
      </Video>
      <Platform />
    </VideoContainer>
  );
};

export default Hero;
