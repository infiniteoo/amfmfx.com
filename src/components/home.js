import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable";

const Home = () => {
  return (
    <div>
      <Soundtable />
      <div className="splashScreen">
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
