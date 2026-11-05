import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const platforms = [
    {
      image: "/media/images/zerodhaFundhouse.png",
      alt: "Fundhouse",
      width: "120px",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/media/images/sensibullLogo.svg",
      alt: "Sensibull",
      width: "120px",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "/media/images/tijori.svg",
      alt: "Tijori",
      width: "80px",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "/media/images/streakLogo.png",
      alt: "Streak",
      width: "120px",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "/media/images/smallcaseLogo.png",
      alt: "Smallcase",
      width: "120px",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      image: "/media/images/dittoLogo.png",
      alt: "Ditto",
      width: "80px",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container product-universe">
      <div className="text-center">
        <h1 className="fw-bold">The Tradevault Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">
        {platforms.map((platform, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
            <div className="universe-card">
              <img
                src={platform.image}
                alt={platform.alt}
                style={{ maxWidth: platform.width }}
              />
              <p className="mt-3 text-muted small">{platform.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 mb-5">
        <button
          className="btn btn-primary px-4 py-2 fs-5"
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
