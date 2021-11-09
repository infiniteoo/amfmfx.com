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

function Row(props) {
  console.log("in Row function, props", props);
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
      </TableRow>
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
                <TableCell align="right" className="white-text">
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
                  {/* <DownloadForOfflineIcon /> */}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sounds.map((sound) => (
                <Row
                  key={sound.name}
                  row={sound}
                  state={props.state}
                  updateUser={props.updateUser}
                />
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
