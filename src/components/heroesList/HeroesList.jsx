import React from "react";
import Singlehero from "../singleHero/Singlehero";
import { Link } from "react-router-dom";

const HeroesList = () => {
  return (
    <>
      <Link to="/">
        <button> Back</button>
      </Link>
      <div className="container">
        <Singlehero />
      </div>
    </>
  );
};

export default HeroesList;
