import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row text-muted team-content">
        <div className="col-12 col-md-6 team-profile text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-image"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-12 col-md-6 team-bio">
          <p>
            Nithin bootstrapped and founded Tradevault in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Tradevault has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            <a href="" className="about-link">
              Homepage
            </a>
            <a href="" className="about-link">
              TradingQnA
            </a>
            <a href="" className="about-link">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
