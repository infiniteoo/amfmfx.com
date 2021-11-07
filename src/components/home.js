import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div>
      <Soundtable />
      <Sidebar />
      <div className="splashScreen">
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
