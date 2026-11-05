import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-6 col-12 p-lg-5 p-3 text-center">
          <img
            src="media/images/largestBroker.svg"
            className="img-fluid"
            alt="Largest stock broker"
          />
        </div>

        {/* Content */}
        <div className="col-lg-6 col-12 p-4">
          <h1 className="fs-2">Largest stock broker in India</h1>

          <p className="mb-5">
            2+ million Tradevault clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-md-6 col-12">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-md-6 col-12">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/pressLogos.png"
            className="img-fluid mt-4"
            alt="Press logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
