import React from "react";

import Soundtable from "./soundtable";
import Sidebar from "./sidebar";

const Dashboard = (props) => {
  console.log("dashboard state props", props.state);
  return (
    <div className="dashboard_container">
      {/*  <img src={amfmfxLogo} alt="" /> */}
      <Soundtable state={props.state} updateUser={props.updateUser} />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
