import React from "react";
import "./singleHero.scss";

const Singlehero = () => {
  return (
    <div>
      <div className="singleHero">
        <video
          className="singleHero__video"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png"
          autoPlay
          preload="auto"
          loop
          playsInline
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" />
        </video>

        <img
          src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png?"
          alt="Anti_Mage"
        />
        <h1>Anti-mage</h1>
        <hr />
        <h3>hp</h3>
        <h3>mana</h3>
        <button>read more</button>
      </div>
    </div>
  );
};

export default Singlehero;
