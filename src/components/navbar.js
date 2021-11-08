import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import PopOver from "./accountpopover";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="">
            {loggedIn ? (
              <ul className="navholder">
                <li>
                  {" "}
                  <Link
                    to="#"
                    className="btn btn-link text-secondary"
                    onClick={this.logout}
                  >
                    <span className="text-secondary">logout</span>
                  </Link>
                </li>

                <li className="nav-account">
                  <PopOver userInfo={this.props.userInfo} />
                </li>
              </ul>
            ) : (
              <ul className="navholder">
                <li>
                  {" "}
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
                  </Link>
                </li>

                {/* <li className="nav-account">
                  <PopOver userInfo={this.props.userInfo} />
                </li> */}
              </ul>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
