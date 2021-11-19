import * as React from "react";
import axios from "axios";
import CircleLoading from "./loading.js";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Waveform from "./Waveform";
import getMP3 from "../utils/getMP3";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { uid } from "../utils/uid";

export default function Soundtable(props) {
  console.log("soundstable state props", props);
  // get data from /api/sounds and console.log it
  const [sounds, setSounds] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/sounds/")
      .then((res) => {
        setSounds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    console.log(sounds);
  }, [sounds]);

  return (
    <div style={{ marginTop: "3%" }}>
      {props.sounds.length > 0 ? (
        props.sounds.map((sound) => (
          <Card
            sx={{
              height: "150px",
              marginTop: "5px",
              width: "100%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,.5) 5%, rgba(111,66,193,.5) 64%, rgba(234,57,184,.5) 88%)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
              }}
            >
              <div>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {sound.name} <br />
                  {sound.description}
                </Typography>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                }}
              >
                <div>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {sound.category}
                  </Typography>
                </div>
                <div> </div>
                <div> | </div>
                <div>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {sound.bpm}
                  </Typography>
                </div>
                <div> | </div>
                <div>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {sound.key}
                  </Typography>
                </div>
                <div> | </div>
                <div>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {sound.length} sec
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardMedia>
              {console.log("sound", sound.filename)}
              <Waveform
                url={sound.filename}
                filename={sound.filename}
                container={uid()}
                track={uid()}
              />
            </CardMedia>
            <CardActions>
              <button
                onClick={() => getMP3(sound.filename, props)}
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <DownloadForOfflineIcon sx={{ color: "white" }} />
              </button>
            </CardActions>
          </Card>
        ))
      ) : (
        <CircleLoading />
      )}
    </div>
  );
}
