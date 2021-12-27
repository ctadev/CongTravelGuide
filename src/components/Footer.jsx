import React from "react";

function Footer() {
  return (
    <div className="footer-container" id="subscribe">
      <section className="title">
        <h1>BEGIN YOUR JOURNEY WITH OUR TRAVEL GUIDE</h1>
        <p>
          Sign up to receive a complementary travel guide to discover detailed
          maps, essential facts, inspirational images and its must-see
          highlights.
        </p>
        <div>
          <h3>YOUR EMAIL:</h3>
          <input type="text" />
          <button>GET A FREE GUIDE</button>
        </div>
      </section>
      <section className="review-title">
        <h1>Happy Travelers</h1>
        <h5>Hear what others think!</h5>
      </section>
      <section className="review">
        <div className="review1">
          <img
            alt="girl with hat"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/yonder-video/9ba98746-testimonial-1_03e03f03e03f000000001.png"
          ></img>
          <p>
            “My trusted travel guide. I travel a lot and this was my most
            reliable source of information.”
          </p>
          <p>-Liz Jacobs, Toronto Canada</p>
        </div>
        <div className="review2">
          <img
            alt="diving"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/yonder-video/fe40f7a9-testimonial-2_03e03f03e03f000000001.png"
          ></img>
          <p>
            “I backpacked through Kenya with nothing more than my clothes, a
            travel guide, and a dream. It changed my life.”
          </p>
          <p>-David Stevens, London UK</p>
        </div>
        <div className="review3">
          <img
            alt="just a boy"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/yonder-video/d5d014d1-testimonial-3_03e03e03e03e000000001.png"
          ></img>
          <p>
            “A must-have for all those who are in need of a comprehensive guide”
          </p>
          <p>-Jay Rutter, Brisbane AUS</p>
        </div>
      </section>
      <section className="copyright">
        <p>CtaDev Copyright 2021. All Rights Reserved.</p>
      </section>
    </div>
  );
}

export default Footer;
