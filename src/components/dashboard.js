import React from "react";
import Audioplayer from "./audioplayer";
import Sidebar from "./sidebar";
import axios from "axios";
import Soundtable from "./Soundtable.js";

const Dashboard = (props) => {
  const [volume, setVolume] = React.useState(0.05);
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
    <div>
      <Audioplayer
        className="audioplayer_container"
        volume={volume}
        setVolume={setVolume}
      />
      <div className="dashboard_container">
        <Soundtable
          state={props.state}
          updateUser={props.updateUser}
          sounds={sounds}
          volume={volume}
        />
        <Sidebar getSounds={getSounds} />
      </div>
    </div>
  );
};

export default Dashboard;
