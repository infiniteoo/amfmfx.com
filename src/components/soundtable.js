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
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CircleLoading from "./loading.js";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Waveform from "./Waveform";
import demoAudio from "../sounds/FX Abyss.mp3";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
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
          {row.length}
        </TableCell>
        <TableCell align="right" className="white-text">
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, color: "white" }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <Waveform url={demoAudio} />
                    {/*     <TableCell className="white-text">Date</TableCell>
                    <TableCell className="white-text">Customer</TableCell>
                    <TableCell className="white-text" align="right">
                      Amount
                    </TableCell>
                    <TableCell className="white-text" align="right">
                      Total price ($)
                    </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        className="white-text"
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell className="white-text">
                        {historyRow.customerId}
                      </TableCell>
                      <TableCell className="white-text" align="right">
                        {historyRow.amount}
                      </TableCell>
                      <TableCell className="white-text" align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

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
                  <DownloadForOfflineIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
          <Row key={row.name} row={row} />
        ))} */}
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
