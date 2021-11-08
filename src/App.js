import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      accessLevel: null,
      downloadsRemaining: null,
      userId: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      console.log("state", this.state);
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          accessLevel: response.data.user.accessLevel,
          downloadsRemaining: response.data.user.downloadsRemaining,
          userId: response.data.user.userId,
        });
        console.log("state again", this.state);
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          accessLevel: null,
          downloadsRemaining: null,
          userId: null,
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Container>
          {/* greet user if logged in: */}
          {this.state.loggedIn && (
            <p>
              welcome, {this.state.username}! (downloads remaining:{" "}
              {this.state.downloadsRemaining})
            </p>
          )}
          {/* Routes to different components */}

          <Route
            exact
            path="/"
            render={
              this.state.loggedIn
                ? () => (
                    <Dashboard
                      updateUser={this.updateUser}
                      state={this.state}
                    />
                  )
                : () => <Home />
            }
          />
          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />
          <Route path="/signup" render={() => <Signup />} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
