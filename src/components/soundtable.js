import React from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    color: "red !important",
  },
  item: {
    padding: theme.spacing(1.2),
    color: "white",
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px",
    color: "white !important",
  },
}));

const Soundtable = (props) => {
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
  const classes = useStyles();
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setNoOfPages] = React.useState(
    Math.ceil(sounds.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    setNoOfPages(Math.ceil(sounds.length / itemsPerPage));
  }, [sounds]);

  return (
    <div style={{ marginTop: "10%" }}>
      {sounds.length > 0 ? (
        <List dense component="span">
          {sounds
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((sound) => {
              const labelId = `list-secondary-label-${sounds._id}`;
              return (
                <Card
                  sx={{
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
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
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
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                        >
                          {sound.category}
                        </Typography>
                      </div>
                      <div> </div>
                      <div> | </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                        >
                          {sound.bpm}
                        </Typography>
                      </div>
                      <div> | </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                        >
                          {sound.key}
                        </Typography>
                      </div>
                      <div> | </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                        >
                          {sound.length} sec
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                  <CardMedia>
                    <Waveform
                      setActiveSound={props.setActiveSound}
                      url={sound.filename}
                      filename={sound.filename}
                      container={uid()}
                      track={uid()}
                      volume={props.volume}
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
              );
            })}
        </List>
      ) : (
        <div className="loading_container">
          <CircleLoading />
        </div>
      )}

      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
};

export default Soundtable;
