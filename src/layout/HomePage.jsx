import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

import FirstSection from "../components/Main/FirstSecrion";
import SecondSection from "../components/Main/SecondSection";
import ThirdSection from "../components/Main/ThirdSection";
import Rectangle from "../components/Main/Rectangle";
import { Error, Loading } from "../components/globalStyled/GlobalStyled";

import { useGetDotaStatsQuery } from "../api/dota";

const HomePage = () => {
  const { data, error, isLoading } = useGetDotaStatsQuery();

  return (
    <>
      {error ? (
        <Error>
          <h1>{error.data.error}</h1>
          <hr />
          <h3>{error.status}</h3>
        </Error>
      ) : isLoading ? (
        <Loading>
          <MoonLoader color="#ffffff" size={150} />
        </Loading>
      ) : (
        <>
          <FirstSection />
          <Rectangle />
          <SecondSection
            players={data.user_players}
            matches={data.matches_last_day}
          />
          <Rectangle />
          {/* <ThirdSection /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
