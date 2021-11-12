import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import { WaveformContainer, Wave, PlayButton } from "./Waveform.styled.js";

class Waveform extends Component {
  state = {
    playing: false,
    soundData: "",
  };

  constructor(props) {
    super(props);
    this.url = props.url;
    this.filename = props.filename;
  }

  componentDidMount() {
    console.log("filename", this.filename);
    console.log("props", this.props);

    const track = document.querySelector("#track");

    this.waveform = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 25,
      progressColor: "#cd5ff8",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
      hideScrollbar: true,
    });
    console.log("url track:", this.url);
    this.waveform.load(track);
  }

  handlePlay = () => {
    console.log("handleplay hit");
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    return (
      <WaveformContainer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? <PlayArrowIcon /> : <PauseIcon />}
        </PlayButton>
        <Wave id="waveform" />

        <audio
          id="track"
          src={"/api/sound/" + this.filename}
          type="audio/mpeg"
        />
      </WaveformContainer>
    );
  }
}

export default Waveform;
