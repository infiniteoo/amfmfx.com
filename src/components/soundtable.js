import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import CircleLoading from "./loading.js";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Waveform from "./Waveform";
import demoAudio from "../sounds/FX Abyss.mp3";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  console.log("row.filename", row.filename);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
          <a href={"../sounds/" + row.filename} download>
            <DownloadForOfflineIcon sx={{ color: "white" }} />
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, color: "white" }}>
              <Table size="medium" aria-label="sounds" sx={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <Waveform url={row.filename} />
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Soundtable() {
  // get data from /api/sounds and console.log it
  const [sounds, setSounds] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/sounds")
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
    <div>
      {sounds.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,.5) 5%, rgba(111,66,193,.5) 64%, rgba(234,57,184,.5) 88%)",
          }}
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell className="white-text">Name</TableCell>
                <TableCell align="center" className="white-text">
                  Description
                </TableCell>
                <TableCell align="right" className="white-text">
                  Type
                </TableCell>
                <TableCell align="right" className="white-text">
                  Length
                </TableCell>
                <TableCell align="right" className="white-text">
                  Category
                </TableCell>
                <TableCell align="right" className="white-text">
                  BPM
                </TableCell>
                <TableCell align="right" className="white-text">
                  Key
                </TableCell>
                <TableCell align="right" className="white-text">
                  Date
                </TableCell>
                <TableCell align="right" className="white-text">
                  <DownloadForOfflineIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sounds.map((sound) => (
                <Row key={sound.name} row={sound} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CircleLoading />
      )}
    </div>
  );
}