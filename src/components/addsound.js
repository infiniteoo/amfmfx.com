import React, { useState } from "react";

const addsound = () => {
  const [fileToUpload, setFileToUpload] = useState({});

  const handleClick = () => {
    console.log("clicked");
    const chosenFiles = document.getElementById("files");
    console.log(chosenFiles.files);
  };
  return (
    <form className="add-sound-form">
      <div class="form-group">
        <label for="exampleFormControlInput1" className="text-secondary">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter sound name"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1" className="text-secondary">
          Description
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter description"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1" className="text-secondary">
          Category
        </label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Imaging</option>

          <option>Music</option>

          <option>Sound Design</option>

          <option>Voices</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1" className="text-secondary">
          Sub Category
        </label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Brandings</option>
          <option>Promos</option>
          <option>Sweepers</option>
          <option>Music Beds</option>
          <option>Loops</option>
          <option>Ramp Loops</option>
          <option>Music Hooks</option>
          <option>Stagers</option>
          <option>Instrumentals</option>
          <option>Acapellas </option>
          <option>FX</option>
          <option>SFX</option>
          <option>Drones & Pads</option>
          <option>Scratches</option>
          <option>Artist Drops</option>
          <option>Listeners </option>
          <option>Samples & Drops</option>
          <option>Numbers & Letters</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1" className="text-secondary">
          Key
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter key"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1" className="text-secondary">
          BPM
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter BPM"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlFile1" className="text-secondary">
          <h5>Select File</h5>
        </label>
        <br />
        <input
          type="file"
          className="form-control-file"
          id="files"
          name="files"
          multiple
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => handleClick()}
      >
        Submit
      </button>
    </form>
  );
};

export default addsound;
