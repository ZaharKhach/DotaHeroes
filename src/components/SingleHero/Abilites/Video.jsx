import React from "react";
import styled from "styled-components";

const AbilitiVideo = styled.video`
  height: 100%;
  width: 100%;
`;

const Video = ({abilities}) => {

  
  const poster =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_blink.jpg";

  const videoSource =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_blink.webm";

  return (
    <AbilitiVideo poster={poster} autoPlay muted preload="auto" loop>
      <source type="video/webm" src={videoSource} />
    </AbilitiVideo>
  );
};

export default Video;
