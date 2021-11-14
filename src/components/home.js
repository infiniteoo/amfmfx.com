import React from "react";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import Soundtable from "./soundtable 2";
import axios from "axios";

const Home = () => {
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
  return (
    <div width="100%">
      <Soundtable sounds={sounds} />
      <div className="homeSplash">
        <img src={amfmfxLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
