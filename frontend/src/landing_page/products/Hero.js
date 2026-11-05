import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5 product-hero">
      <div className="text-center">
        <h1>Technology</h1>

        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" className="product-link">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
