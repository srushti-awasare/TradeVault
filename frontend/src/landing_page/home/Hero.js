import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 hero-section">
      <div className="row text-center align-items-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Tradevault"
            className="img-fluid mb-4"
          />

          <h1 className="display-5 fw-semibold">Invest in everything</h1>

          <p className="lead px-lg-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary btn-lg px-5 mt-3"
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
