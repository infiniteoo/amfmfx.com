import React from "react";
import Waveform from "./Waveform";
import VolumeSlider from "./VolumeSlider";

const audioplayer = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.activeSound);
  };

  React.useEffect(() => {
    console.log("activesound useeffect", props.activeSound);
  }, [props.activeSound]);
  const finalUrl = "/api/sound/FX Beep Boom.mp3";
  console.log("finalUrl", finalUrl);
  const container = "waveform";
  const trackId = "track";
  const filename = "FX Beep Kickstart.mp3";
  return (
    <div className="audioPlayer_container">
      <Waveform
        url={finalUrl}
        filename={filename}
        container={container}
        track={trackId}
        onClick={() => handleClick()}
      />
      <VolumeSlider />
    </div>
  );
};

export default audioplayer;
