import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 mb-5 open-account-section">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-4">Open a Tradevault account</h1>

          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          <button
            className="btn btn-primary btn-lg px-5 mt-3"
            onClick={() => navigate("/signup")}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
