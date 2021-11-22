import React from "react";
import Waveform from "./Waveform";
import VolumeSlider from "./VolumeSlider";
import { Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import getMP3 from "../utils/getMP3";

const audioplayer = (props) => {
  const finalURL = "/api/sounds/" + props.activeSound;
  return (
    <div className="audioPlayer_container">
      <Waveform
        container="container"
        track="track"
        filename={props.activeSound}
        url={finalURL}
        setActiveSound={props.setActiveSound}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginLeft: "5px",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <Typography gutterBottom variant="subtitle1" component="div">
          {props.activeSound}
        </Typography>
        <button
          onClick={() => getMP3(props.activeSound, props)}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <DownloadForOfflineIcon sx={{ color: "white" }} />
        </button>
        <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
      </div>
    </div>
  );
};

export default audioplayer;
