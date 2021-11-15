import React from "react";
import AddSoundForm from "./addsound.js";

const admin = () => {
  return (
    <div width="100%">
      <div className="adminSplash">
        <h1>ADD A SOUND TO THE DATABASE</h1>
        <AddSoundForm />
      </div>
    </div>
  );
};

export default admin;
