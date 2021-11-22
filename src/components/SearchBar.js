import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function InputWithIcon() {
  return (
    <Box
      sx={{ display: "flex" /* , alignItems: "flex-end" */, color: "white" }}
    >
      <SearchIcon sx={{ color: "white", mr: 5, my: 0.5 }} />
      <TextField
        id="input-with-sx"
        variant="standard"
        fullWidth
        sx={{
          color: "white",
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:after": { borderBottomColor: "white" },
        }}
        InputProps={{
          className: "textfield-input",
        }}
      />
    </Box>
  );
}
