import React from "react";

function Hero() {
  return (
    <div className="container pricing-page">
      <div className="row pricing-hero text-center border-bottom">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 trades in intraday and F&O
        </h3>
      </div>

      <div className="row pricing-cards text-center">
        <div className="col-12 col-lg-4 pricing-card">
          <img src="media/images/pricingEquity.svg" alt="Equity delivery" />
          <h2 className="fs-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-12 col-lg-4 pricing-card">
          <img src="media/images/intradayTrades.svg" alt="Intraday trades" />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-12 col-lg-4 pricing-card">
          <img src="media/images/pricingEquity.svg" alt="Direct mutual funds" />
          <h2 className="fs-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions and DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
