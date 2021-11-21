import React from "react";

import VolumeSlider from "./VolumeSlider";

const audioplayer = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    
  };

  const finalUrl = "/api/sound/FX Beep Boom.mp3";
  

  return (
    <div className="audioPlayer_container">
      <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
    </div>
  );
};

export default audioplayer;
