import React from "react";

/* import Soundtable from "./soundtable"; */
import Soundtable from "./soundtable 2";
import Sidebar from "./sidebar";
import axios from "axios";
import Demo from "./demo.js";

const Dashboard = (props) => {
  const [sounds, setSounds] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/sounds/")
      .then((res) => {
        setSounds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getSounds = (parameter) => {
    axios
      .get(`/api/sounds/${parameter}`)
      .then((res) => {
        setSounds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("dashboard state props", props.state);

  return (
    <div className="dashboard_container">
      {/*  <Soundtable
        state={props.state}
        updateUser={props.updateUser}
        sounds={sounds}
      /> */}
      <Demo state={props.state} updateUser={props.updateUser} sounds={sounds} />
      <Sidebar getSounds={getSounds} />
    </div>
  );
};

export default Dashboard;
