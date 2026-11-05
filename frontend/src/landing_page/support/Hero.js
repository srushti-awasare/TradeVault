import React from "react";

function Hero() {
  return (
    <section className="container-fluid support-hero" id="supportHero">
      <div className="support-wrapper" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row support-content">
        <div className="col-12 col-lg-7 support-search">
          <h1>Search for an answer or browse help topics to create a ticket</h1>

          <input
            className="form-control p-3"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="support-links">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-12 col-lg-5 support-featured">
          <h2 className="fs-3">Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
