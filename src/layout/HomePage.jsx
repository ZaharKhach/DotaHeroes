import React from "react";
import FirstSection from "../components/Main/FirstSecrion";
import SecondSection from "../components/Main/SecondSection";
import ThirdSection from "../components/Main/ThirdSection";
import Rectangle from "../components/Main/Rectangle";

const HomePage = () => {
  return (
    <>
      <FirstSection />
      <Rectangle />
      <SecondSection />
      <Rectangle />
      <ThirdSection />
    </>
  );
};

export default HomePage;
