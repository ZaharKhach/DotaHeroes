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

const Hero = ({name}) => {
  const poster = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name}.png`;
  const videoSource = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name}.webm`
  return (
    <VideoContainer>
      <Video
        poster={poster}
        autoPlay
        muted
        preload="auto"
        loop
      >
        <source
          type="video/webm"
          src={videoSource}
        />
      </Video>
    </VideoContainer>
  );
};

export default Hero;
