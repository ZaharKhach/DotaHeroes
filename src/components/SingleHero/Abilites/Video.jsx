import React from "react";
import styled from "styled-components";

import { selectHeroActiveAbility } from "../../Heroes/slices/HeroSlice";
import { useSelector } from "react-redux";

const AbilitiVideo = styled.video`
  height: 100%;
  width: 100%;
`;

const Video = ({ abilities }) => {
  console.log(abilities);
  const active = useSelector(selectHeroActiveAbility);

  return (
    <>
      {abilities.map(
        (item) =>
          item === active && (
            <AbilitiVideo
              key={item}
              poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${
                active.split("_")[0]
              }/${active}.jpg`}
              autoPlay
              muted
              preload="auto"
              loop
            >
              <source
                type="video/webm"
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${
                  active.split("_")[0]
                }/${active}.webm`}
              />
            </AbilitiVideo>
          )
      )}
    </>
  );
};

export default Video;
