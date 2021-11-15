import React, { useState } from "react";

const addsound = () => {
  const [fileToUpload, setFileToUpload] = useState({
    file: null,
    name: null,

    description: null,
    category: null,
    subcategory: null,
    soundKey: null,
    length: null,
    bpm: null,
  });

  const handleClick = () => {
    console.log("clicked");
    const chosenFiles = document.getElementById("files");
    console.log(chosenFiles.files);
    console.log(fileToUpload);
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
          value={fileToUpload.name}
          onChange={(e) =>
            setFileToUpload({ ...fileToUpload, name: e.target.value })
          }
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
          value={fileToUpload.description}
          onChange={(e) => {
            setFileToUpload({ ...fileToUpload, description: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1" className="text-secondary">
          Category
        </label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          value={fileToUpload.category}
          onChange={(e) => {
            setFileToUpload({ ...fileToUpload, category: e.target.value });
          }}
        >
          <option value="" disabled selected>
            select category
          </option>
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
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          value={fileToUpload.subcategory}
          onChange={(e) => {
            setFileToUpload({ ...fileToUpload, subcategory: e.target.value });
          }}
        >
          <option value="" disabled selected>
            select subcategory
          </option>
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
          value={fileToUpload.key}
          onChange={(e) => {
            setFileToUpload({ ...fileToUpload, soundKey: e.target.value });
          }}
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
          value={fileToUpload.bpm}
          onChange={(e) => {
            setFileToUpload({ ...fileToUpload, bpm: e.target.value });
          }}
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
