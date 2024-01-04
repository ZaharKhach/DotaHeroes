import React from "react";
import styled from "styled-components";

const Video = styled.video`
    width:580px;
    height: 684px;
`

const Hero = () => {
  return (
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
  );
};

export default Hero;
