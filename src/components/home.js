import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Demo from "./demo";
const Home = () => {
  return (
    <div width="100%">
      <Demo />
      <div className="homeSplash">
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
