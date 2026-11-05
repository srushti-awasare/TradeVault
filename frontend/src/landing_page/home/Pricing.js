import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center px-2 px-lg-0">
        {/* Left Content */}
        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Space only on desktop */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Pricing Cards */}
        <div className="col-lg-6 col-12">
          <div className="row text-center g-3">
            {/* Equity */}
            <div className="col-md-6 col-12">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="mb-0">
                  Free equity delivery and
                  <br className="d-none d-sm-block" />
                  direct mutual funds
                </p>
              </div>
            </div>

            {/* Intraday */}
            <div className="col-md-6 col-12">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="mb-0">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
