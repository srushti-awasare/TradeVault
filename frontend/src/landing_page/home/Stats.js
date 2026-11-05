import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row px-3 px-lg-5 py-5 align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-12 py-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.3+ crore customers trust Tradevault with ₹3.5+ lakh
            crores worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Tradevault universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-12 py-4 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="Tradevault ecosystem"
            className="img-fluid"
          />

          <div className="text-center mt-3">
            <a
              href="#"
              className="me-4 d-inline-block mb-2"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href="#"
              className="d-inline-block mb-2"
              style={{ textDecoration: "none" }}
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
