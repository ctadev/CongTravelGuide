import React from "react";

function hero() {
  return (
    <div className="hero-container" id="home">
      <header>
        <h1>Travel Guides</h1>
      </header>
      <section className="hero-info">
        <h2>Get Exclusive travel tips</h2>
        <p>in our destination specific e-guides</p>
        <button>GET A FREE GUIDE</button>
      </section>
      <section className="overlay"></section>
    </div>
  );
}

export default hero;
