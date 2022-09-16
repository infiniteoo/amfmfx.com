import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import analytics from "../../imgs/music.svg";
import brandedlinks from "../../imgs/listening.svg";
import campaigns from "../../imgs/compose.svg";
import linkmanagement from "../../imgs/recording.svg";
import mobilelinks from "../../imgs/happy.svg";
import qrcodes from "../../imgs/programmer.svg";

import "./pages.css";

export default function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container style={{ marginTop: "100px" }} className="aboutContainer">
      {/* <img src={amfmfxLogo} alt="" /> */}

      <section className="card">
        <img src={linkmanagement} alt="" />
        <div>
          <h3>
            <strong>What We Do</strong>
          </h3>
          <p>
            AMFMFX.COM is a subscription-based audio distribution service that
            allows for the preview and distribution of sound design, music, and
            vocal sample audio files for use in the production of commericial
            radio and sound design. This platform is designed to assist
            Production and Imaging Directors in the commercial broadcast radio
            industry with various types of audio files to use in their promos
            and commercials.
          </p>
        </div>
      </section>
      <section className="card">
        <img src={mobilelinks} alt="" />
        <div>
          <h3>
            <strong>How It Works</strong>
          </h3>
          <p>
            AMFMFX.com is free to use. You can browse our library of audio
            files, listen to previews, and download the files you need. If you
            want to download more than 5 files per month, you can subscribe to
            our service for $9.99 per month. Subscribers can download up to 50
            files per month. Subscribers also have access to our exclusive
            library of audio files that are not available to non-subscribers.
          </p>
        </div>
      </section>
      <section className="card">
        <img src={brandedlinks} alt="" />
        <div>
          <h3>
            <strong>Secure Platform</strong>
          </h3>
          <p>
            AMFMFX.com is a secure platform developed with cutting-edge
            technologies. We use the latest encryption and security protocols to
            ensure your data is safe and your anonymity remains intact. We
            remain a proud, neutral platform.
          </p>
        </div>
      </section>

      <section className="card">
        <img src={campaigns} alt="" />
        <div>
          <h3>
            <strong>Technology</strong>
          </h3>
          <p>
            AMFMFX.com.com was created with the MERN stack (MongoDB, Express,
            React, Node.js). 
          </p>
        </div>
      </section>
      <section className="card">
        <img src={analytics} alt="" />
        <div>
          <h3>
            <strong>Street Cred</strong>
          </h3>
          <p>
            The producers, editors and sound designers behind AMFMFX.com have
            worked with some of the biggest names in the radio industry. We have
            worked with the likes of iHeartMedia, Cumulus Media, Entercom, CBS
            Radio, Cox Media Group, and many more. We have also worked with
            countless radio stations and production companies across the country
            and around the world.
            
          </p>
        </div>
      </section>
      <section className="card">
        <img src={qrcodes} alt="" />
        <div>
          <h3>
            <strong>About Us</strong>
          </h3>
          <p>
            AMFMFX.com is the creation of Troy Dorman, an indepedent, dissident
            developer and entreprenur. This website was primarly created as a
            way to learn and experiment with new technologies. It is a work in
            progress and will be updated frequently. If you have any questions
            or comments, please feel free to contact us.{" "}
            <a href="mailto:troydorman@gmail.com">troydorman@gmail.com</a>
          </p>
        </div>
      </section>
      {/*     </div> */}
    </Container>
  );
}
