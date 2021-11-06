import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <img src={amfmfxLogo} alt="" />
      <Soundtable />
    </div>
  );
};

export default Dashboard;
