import React from "react";
import darknight from "../styles/img/darknight.jpg";
import iceland from "../styles/img/iceland.jpg";
import island from "../styles/img/island.jpg";
import korea from "../styles/img/korea.jpg";
import vietnam from "../styles/img/vietnam.jpg";

function Gallery() {
  return (
    <div className="gallery-container" id="gallery">
      <section className="gallery-title">
        <h1>Top Places</h1>
        <p>
          There's a unique Yonder e-guide available to take you through these
          top spots.
        </p>
      </section>
      <section className="img-container">
        <div className="img1">
          <img alt="travel" src={darknight} />
          <h2>Australia</h2>
          <div></div>
        </div>
        <div className="img2">
          <img alt="travel" src={iceland} />
          <h2>Iceland</h2>
          <div></div>
        </div>
        <div className="img3">
          <img alt="travel" src={island} />
          <h2>Russia</h2>
          <div></div>
        </div>
        <div className="img4">
          <img alt="travel" src={korea} />
          <h2>Korea</h2>
          <div></div>
        </div>
        <div className="img5">
          <img alt="travel" src={vietnam} />
          <h2>Vietnam</h2>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
