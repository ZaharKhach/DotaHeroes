import React from "react";
import FirstSection from "../components/FirstSecrion";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Rectangle from "../components/Rectangle";

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
