import React from "react";
import styled from "styled-components";

import { selectHeroActiveAbility } from "../../Heroes/slices/HeroSlice";
import { useSelector } from "react-redux";

const AbilitiVideo = styled.video`
  height: 100%;
  width: 100%;
`;

const Video = ({ abilities }) => {
  const active = useSelector(selectHeroActiveAbility);

  const baseUrl =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities";
  const videoUrl = `${baseUrl}/${active.split("_")[0]}/${active}`;

  return (
    <>
      {abilities.map(
        (item) =>
          item === active && (
            <AbilitiVideo
              key={item}
              poster={`${videoUrl}.jpg`}
              autoPlay
              preload="auto"
              loop
              playsInline
              muted
            >
              <source type="video/webm" src={`${videoUrl}.webm`} />
              <source type="video/mp4" src={`${videoUrl}.mp4`}></source>
            </AbilitiVideo>
          )
      )}
    </>
  );
};

export default Video;
