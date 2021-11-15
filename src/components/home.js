import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import AddSound from "./addsound";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div width="100%">
      <div className="homeSplash">
        <Sidebar />
        <AddSound />
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
