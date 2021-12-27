import React, { useState } from "react";

function Nav() {
  const [toggleNav, settoggleNav] = useState(true);
  return (
    <div className="nav-container">
      <section className="home">
        <h1>
          <a href="#home">YONDER</a>
        </h1>
      </section>
      <section className="hamburger" onClick={() => settoggleNav(!toggleNav)}>
        <i className={toggleNav ? "fas fa-bars" : "far fa-window-close"}></i>
      </section>
      <section className={toggleNav ? "nav-item" : "nav-item show"}>
        <ul>
          <li>
            <a href="#why">Why</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Nav;
