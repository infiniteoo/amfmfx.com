import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import axios from "axios";

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

    axios
      .get("/api/sound/" + this.filename, {
        "Content-Type":
          "audio/mpeg3;audio/x-mpeg-3;video/mpeg;video/x-mpeg;text/xml",
        responseType: "audio/mp3",
      })
      .then((response) => {
        console.log("response", response);

        this.setState({ soundData: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      });

    const track = document.querySelector("#track");

    this.waveform = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
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
    console.log("sounddata state", this.state.soundData);
    console.log("track", document.querySelector("#track"));
    const track = document.querySelector("#track");

    return (
      <WaveformContainer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? "Play" : "Pause"}
        </PlayButton>
        <Wave id="waveform" />
        <audio id="track" src={this.state.soundData} type="audio/mpeg" />
      </WaveformContainer>
    );
  }
}

export default Waveform;
