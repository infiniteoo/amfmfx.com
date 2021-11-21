import React from "react";
import Waveform from "./Waveform";
import VolumeSlider from "./VolumeSlider";

const audioplayer = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const finalUrl = "/api/sound/FX BOOMerang.mp3";

  return (
    <div className="audioPlayer_container">
      <Waveform
        container="container"
        track="track"
        filename="FX BOOMerang.mp3"
        url={finalUrl}
      />
      <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
    </div>
  );
};

export default audioplayer;
