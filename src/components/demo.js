import React from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
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

const AllProjects = (props) => {
  const [sounds, setSounds] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/sounds/")
      .then((res) => {
        setSounds(res.data);
        console.log("sounds", sounds);
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
  };
  React.useEffect(() => {
    console.log(sounds);
    setNoOfPages(Math.ceil(sounds.length / itemsPerPage));
  }, [sounds]);

  return (
    <div style={{ marginTop: "3%" }}>
      {sounds.length > 0 ? (
        <List dense compoent="span">
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
              );
            })}
        </List>
      ) : (
        <CircleLoading />
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

export default AllProjects;

const projectsList = [
  {
    projectID: 2,
    projectName: "score",
  },
  {
    projectID: 4,
    projectName: "score",
  },
  {
    projectID: 5,
    projectName: "score",
  },
  {
    projectID: 15,
    projectName: "score",
  },
  {
    projectID: 16,
    projectName: "score",
  },
  {
    projectID: 17,
    projectName: "score",
  },
  {
    projectID: 18,
    projectName: "score",
  },
  {
    projectID: 19,
    projectName: "Marathon",
  },
  {
    projectID: 20,
    projectName: "TestProject",
  },
  {
    projectID: 24,
    projectName: "score",
  },
  {
    projectID: 25,
    projectName: "manu",
  },
  {
    projectID: 26,
    projectName: "score",
  },
  {
    projectID: 27,
    projectName: "score",
  },
  {
    projectID: 28,
    projectName: "123",
  },
  {
    projectID: 29,
    projectName: "1234",
  },
  {
    projectID: 30,
    projectName: "Sample",
  },
  {
    projectID: 31,
    projectName: "1",
  },
  {
    projectID: 32,
    projectName: "1",
  },
  {
    projectID: 33,
    projectName: "2",
  },
  {
    projectID: 34,
    projectName: "score",
  },
  {
    projectID: 35,
    projectName: "TestProject2",
  },
  {
    projectID: 36,
    projectName: "score",
  },
  {
    projectID: 37,
    projectName: "score",
  },
  {
    projectID: 38,
    projectName: "AWS ",
  },
  {
    projectID: 39,
    projectName: "AWS TEST",
  },
  {
    projectID: 40,
    projectName: "score",
  },
  {
    projectID: 41,
    projectName: "hahj",
  },
  {
    projectID: 42,
    projectName: "hahj",
  },
  {
    projectID: 44,
    projectName: "nnaj",
  },
  {
    projectID: 46,
    projectName: "Best Western",
  },
  {
    projectID: 50,
    projectName: "score",
  },
  {
    projectID: 51,
    projectName: "score",
  },
  {
    projectID: 52,
    projectName: "score",
  },
  {
    projectID: 53,
    projectName: "sample",
  },
  {
    projectID: 54,
    projectName: "ABC",
  },
  {
    projectID: 56,
    projectName: "sample project",
  },
  {
    projectID: 57,
    projectName: "XYZProject",
  },
  {
    projectID: 58,
    projectName: "test",
  },
  {
    projectID: 59,
    projectName: "b",
  },
  {
    projectID: 60,
    projectName: "test",
  },
  {
    projectID: 61,
    projectName: "SAMPLE",
  },
  {
    projectID: 62,
    projectName: "SAMPLE",
  },
  {
    projectID: 63,
    projectName: "score",
  },
  {
    projectID: 64,
    projectName: "score",
  },
  {
    projectID: 65,
    projectName: "TestRandom",
  },
  {
    projectID: 66,
    projectName: "RandomProjectName",
  },
  {
    projectID: 67,
    projectName: "test",
  },
  {
    projectID: 68,
    projectName: "Best Western International",
  },
  {
    projectID: 69,
    projectName: "a",
  },
  {
    projectID: 70,
    projectName: "RandomProjectName",
  },
  {
    projectID: 71,
    projectName: "SecretProject",
  },
  {
    projectID: 77,
    projectName: "score",
  },
  {
    projectID: 79,
    projectName: "RandomProjectName2",
  },
  {
    projectID: 80,
    projectName: "RandomProjectName2",
  },
  {
    projectID: 82,
    projectName: "YetAnotherRandomProject",
  },
  {
    projectID: 84,
    projectName: "Test Project 2",
  },
  {
    projectID: 96,
    projectName: "CannotStopWithRandomProjects",
  },
  {
    projectID: 111,
    projectName: "S.H.I.E.L.D",
  },
  {
    projectID: 113,
    projectName: "Avengers",
  },
  {
    projectID: 114,
    projectName: "Justice League",
  },
  {
    projectID: 124,
    projectName: "TestProject",
  },
  {
    projectID: 126,
    projectName: "Justice League",
  },
  {
    projectID: 127,
    projectName: "Test Project",
  },
  {
    projectID: 133,
    projectName: "test project",
  },
];
