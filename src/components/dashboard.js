import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import axios from "axios";
import Soundtable from "./soundtable";


const Dashboard = () => {
  axios.get("/api/sounds").then((res) => {
    console.log(res.data);
  });

  // fetch all /api/sounds from back end server

  return (
    <div className="dashboard_container">
      <img src={amfmfxLogo} alt="" />
      <Soundtable />
    </div>
  );
};

export default Dashboard;
