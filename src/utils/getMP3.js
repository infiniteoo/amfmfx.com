import axios from "axios";

const getMP3 = (filename, state) => {
  if (state.downloadsRemaining > 0) {
    state.downloadsRemaining--;
    axios({
      url: "/api/sound/" + filename,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    });

    // update downloadsRemaining in Database after download
    axios.post("/user/deduct-dl", state).then((response) => {
      console.log(response.data);
    });
  } else {
    alert("You have reached your download limit.");
  }

  console.log("getmp3 props.state", state);
};

export default getMP3;
