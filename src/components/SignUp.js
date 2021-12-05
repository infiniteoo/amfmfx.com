import React, { useState } from "react";
import axios from "axios";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import ErrorSnackbar from "./Snackbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    successfulSignUp: "false",
    vertical: "bottom",
    horizontal: "center",
    openSnackbar: false,
  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { vertical, horizontal, openSnackbar } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, openSnackbar: false });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: state.username,
        password: state.password,
        email: state.email,
      })
      .then((response) => {
        console.log(response.data.errmsg);
        if (!response.data.errmsg) {
          console.log("successful signup");
          setState({
            ...state,
            //redirect to login page
            successfulSignUp: "true",
          });
        } else {
          console.log("username already taken");
          // display error ErrorSnackbar

          console.log("open value", openSnackbar);
          setState({
            ...state,

            username: "",
            password: "",
            email: "",
            openSnackbar: true,
          });
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  return state.successfulSignUp === "true" ? (
    <h1>confirmed!</h1>
  ) : (
    <div className="splashScreen">
      <div className="">
        <div className="">
          <img src={amfmfxLogo} alt="" />
          <h1 className="text-center mb-3">create account</h1>

          <form>
            <div className="form-group">
              <input
                className="form-control p-3"
                type="text"
                id="username"
                name="username"
                placeholder="create username"
                value={state.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3">
              <div className="">
                <input
                  className="form-control p-3"
                  placeholder="create password"
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="">
                <input
                  className="form-control p-3"
                  placeholder="enter email address"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              className="btn btn-primary btn-block mt-4"
              onClick={handleSubmit}
              type="button"
            >
              Sign up
            </button>
          </form>
          <p className="lead mt-4">
            No Account? <a href="/signup">Register</a>
          </p>
        </div>
      </div>

      <Snackbar
        open={state.openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Email address already registered.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUp;
