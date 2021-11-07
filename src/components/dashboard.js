import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable";

const Dashboard = (props) => {
  console.log("dashboard state props", props.state);
  return (
    <div className="dashboard_container">
      <img src={amfmfxLogo} alt="" />
      <Soundtable />
    </div>
  );
};

export default Dashboard;
