import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable 2";

const Home = () => {
  return (
    <div width="100%">
      <Soundtable />
      <div className="homeSplash">
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
