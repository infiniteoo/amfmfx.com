import React, { useState } from "react";
import axios from "axios";

const addsound = () => {
  const [fileToUpload, setFileToUpload] = useState({
    name: null,
    description: null,
    category: null,
    subcategory: null,
    soundKey: null,
    length: null,
    bpm: null,
    filename: null,
  });

  const handleClick = () => {
    console.log("clicked");
    const chosenFiles = document.getElementById("files");
    console.log(chosenFiles.files);
    console.log(fileToUpload);

    // send fileToUpload to server with axios
    axios
      .post("/api/sounds/upload", fileToUpload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Create a non-dom allocated Audio element
  var audio = document.createElement("audio");

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
          /* multiple */
          onChange={(e) => {
            var target = e.currentTarget;
            var file = target.files[0];
            var reader = new FileReader();

            if (target.files && file) {
              var reader = new FileReader();

              reader.onload = function (e) {
                audio.src = e.target.result;
                audio.addEventListener(
                  "loadedmetadata",
                  function () {
                    // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
                    var duration = audio.duration;

                    // example 12.3234 seconds
                    console.log(
                      "The duration of the song is of: " + duration + " seconds"
                    );
                    let time = parseInt(duration);
                    let minutes = Math.floor(time / 60);
                    let seconds = time - minutes * 60;
                    console.log(
                      `time after calculation: ${minutes}:${seconds}`
                    );

                    setFileToUpload({
                      ...fileToUpload,
                      length: parseInt(duration),

                      filename: file.name,
                    });
                    // Alternatively, just display the integer value with
                    // parseInt(duration)
                    // 12 seconds
                  },
                  false
                );
              };

              reader.readAsDataURL(file);
            }
            console.log("blah e.target.files[0].name", e.target.files[0].name);
          }}
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
