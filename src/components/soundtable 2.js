import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import CircleLoading from "./loading.js";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Waveform from "./Waveform";
import getMP3 from "../utils/getMP3";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Row(props) {
  console.log("in Row function, props", props);
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {/* <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            className="white-text"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className="white-text" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.description}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.soundType}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.soundLength}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.category}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.bpm}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.key}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.dateEntered}
        </TableCell>
        <TableCell align="right" className="white-text">
          <button
            onClick={() => getMP3(row.filename, props)}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <DownloadForOfflineIcon sx={{ color: "white" }} />
          </button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, color: "white" }}>
              <Table size="medium" aria-label="sounds" sx={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <td>
                      {row ? (
                        <Waveform url={row.filename} filename={row.filename} />
                      ) : (
                        <CircleLoading />
                      )}
                    </td>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

export default function Soundtable(props) {
  console.log("soundstable state props", props.state);
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
      {sounds.length > 0 ? (
        sounds.map((sound) => (
          <Card
            sx={{
              height: "150px",
              width: "100%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,.5) 5%, rgba(111,66,193,.5) 64%, rgba(234,57,184,.5) 88%)",
              boxShadow: "-0px -0px 8px #197e71, 18px 18px 8px #4bffff;",
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
                  {sound.name} - {sound.description}
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
                    {sound.dateEntered}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardMedia>
              <Waveform url={sound.filename} filename={sound.filename} />
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
/* {sounds ? (<div style={{ marginTop: "3%" }}>
      {sounds.map((sound) => (
       <Card
      sx={{
        height: "175px",
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
          <Typography gutterBottom variant="h5" component="div">
            {sound.name} - {sound.description}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {sound.category} | {sound.bpm} | {sound.key} | {sound.soundType}
          </Typography>
        </div>
      </CardContent>
      <CardMedia>
        <Waveform url={sound.filename} filename={sound.filename} />
      </CardMedia>
      <CardActions>
          <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))}
    </div>)}); */
