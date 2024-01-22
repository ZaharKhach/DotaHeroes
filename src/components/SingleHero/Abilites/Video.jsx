import styled from "styled-components";

import { selectHeroActiveAbility, selectVideoError, videoIsOnError } from "../../Heroes/slices/HeroSlice";
import { useDispatch, useSelector } from "react-redux";

const AbilitiVideo = styled.video`
  height: 100%;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: #888888;
  font-family: "Hypatia", sans-serif;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Video = ({ abilities, heroName }) => {
  const active = useSelector(selectHeroActiveAbility);
  const errorStatus = useSelector(selectVideoError);
  const dispatch = useDispatch()

  const baseUrl =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities";
  const videoUrl = `${baseUrl}/${heroName}/${active}`;


  const handleVideoError = () => {
    dispatch(videoIsOnError());
  };
  
  return (
    <>
      {errorStatus ? (
        <ErrorMessage>Ability video not found</ErrorMessage>
      ) : (
        abilities.map(
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
                onError={handleVideoError}
              >
                <source type="video/webm" src={`${videoUrl}.webm`} />
                <source type="video/mp4" src={`${videoUrl}.mp4`}></source>
              </AbilitiVideo>
            )
        )
      )}
    </>
  );
};

export default Video;
