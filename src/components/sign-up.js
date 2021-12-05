import React, { Component } from "react";
import axios from "axios";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";
import ErrorSnackbar from "./Snackbar";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      successfulSignUp: "false",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.open = false;
  }

  componentDidUpdate(prevProps) {
    if (this.open == prevProps.open) {
      this.open = true;
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      })
      .then((response) => {
        console.log(response.data.errmsg);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            successfulSignUp: "true",
          });
        } else {
          console.log("username already taken");
          // display error ErrorSnackbar
          this.open = true;
          console.log(this.open);
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    return this.state.successfulSignUp === "true" ? (
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
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <div className="">
                  <input
                    className="form-control p-3"
                    placeholder="create password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
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
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button
                className="btn btn-primary btn-block mt-4"
                onClick={this.handleSubmit}
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
        {this.open ? <ErrorSnackbar /> : null}
      </div>
    );
  }
}

export default Signup;
