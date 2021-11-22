import React from "react";
import Waveform from "./Waveform";
import VolumeSlider from "./VolumeSlider";

const audioplayer = (props) => {
  React.useEffect(() => {
    console.log(
      "activesound useeffect in audioplayer triggered",
      props.activeSound
    );
  }, [props.activeSound]);

  const finalURL = "/api/sounds/" + props.activeSound;
  return (
    <div className="audioPlayer_container">
      <Waveform
        container="container"
        track="track"
        filename={props.activeSound}
        url={finalURL}
      />
      <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
    </div>
  );
};

export default audioplayer;
