import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const searchDatabase = (searchTerm) => {
  axios
    .get(`/api/search/${searchTerm}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function InputWithIcon() {
  const [searchValue, setSearchValue] = React.useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", color: "white" }}>
      <SearchIcon sx={{ color: "white", mr: 5, my: 0.5 }} />
      <TextField
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchDatabase(searchValue);
            setSearchValue("");
          }
        }}
        value={searchValue}
        onChange={handleChange}
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
