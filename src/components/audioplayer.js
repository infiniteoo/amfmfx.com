import React from "react";
import Waveform from "./Waveform";
import { uid } from "../utils/uid";

const audioplayer = (props) => {
  return (
    <div className="audioPlayer_container">
      <Waveform url={""} filename={""} container={uid()} track={uid()} />
    </div>
  );
};

export default audioplayer;
