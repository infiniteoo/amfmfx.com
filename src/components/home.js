import React from "react";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="">
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
      <h1 className="mt-4">amfmfx.com</h1>
      <p className="lead mb-3">Welcome </p>
      <a href="/users/logout" class="btn btn-secondary">
        Logout
      </a>
    </div>
  );
};

export default Home;
