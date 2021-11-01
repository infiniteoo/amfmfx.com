import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <h1 className="mt-4">Dashboard</h1>
        <p className="lead mb-3">Welcome </p>
        <a href="/users/logout" class="btn btn-secondary">
          Logout
        </a>
      </div>
    );
  }
}

export default Home;
