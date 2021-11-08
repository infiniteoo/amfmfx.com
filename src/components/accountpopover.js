import * as React from "react";
import Popover from "@mui/material/Popover";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

export default function PopOver(props) {
  console.log("userInfo", props.userInfo);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <AccountCircleIcon
        sx={{ color: "white", fontSize: "40px" }}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {!props.userInfo.username
            ? "Not logged in"
            : `Username: ${props.userInfo.username}`}
        </Typography>
        <Typography sx={{ p: 2 }}>
          {!props.userInfo.downloadsRemaining
            ? ""
            : `D/L Remaining: ${props.userInfo.downloadsRemaining}`}
        </Typography>
      </Popover>
    </div>
  );
}
