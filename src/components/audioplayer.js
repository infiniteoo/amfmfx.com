import React from "react";

import VolumeSlider from "./VolumeSlider";

const audioplayer = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.activeSound);
  };

  const finalUrl = "/api/sound/FX Beep Boom.mp3";
  console.log("finalUrl", finalUrl);

  return (
    <div className="audioPlayer_container">
      <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
    </div>
  );
};

export default audioplayer;
