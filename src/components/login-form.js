import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import amfmfxLogo from "../assets/amfmfx.com text logo.png";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/",
          });
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="splashScreen">
          <div className="">
            <div className="">
              <img src={amfmfxLogo} alt="" />
              <h1 className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i> member login
              </h1>

              <form>
                <div className="form-group">
                  {/* <label htmlFor="username">Email</label> */}
                  <input
                    type="email"
                    id="username"
                    name="username"
                    className="form-control p-3"
                    placeholder="enter username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control p-3"
                    placeholder="enter password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </form>
              <p className="lead mt-4">
                No Account? <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
