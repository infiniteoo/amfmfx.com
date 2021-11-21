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
    this.activeSound = props.setActiveSound;
    this.filename = props.filename;
    this.container = props.container;
    this.track = props.track;
    this.volume = props.volume;
  }

  componentDidUpdate(prevProps) {
    this.waveform.setVolume(this.props.volume / 100 || 0.6);
  }

  componentDidMount() {
    const track = document.querySelector(`#${this.track}`);

    this.waveform = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: "#" + this.container,
      backend: "WebAudio",
      height: 25,
      progressColor: "#cd5ff8",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
      hideScrollbar: true,
      setVolume: this.volume / 100 || 0.5,
    });

    this.waveform.load(track);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    return (
      <WaveformContainer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? <PlayArrowIcon /> : <PauseIcon />}
        </PlayButton>
        <Wave id={this.container} />

        <audio
          id={this.track}
          src={"/api/sound/" + this.filename}
          type="audio/mpeg"
        />
      </WaveformContainer>
    );
  }
}

export default Waveform;
