import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const availableCash = 4043.1;
  const usedMargin = 3757.3;
  const payin = 3736.4;
  const availableBalance = availableCash;
  const openingBalance = availableBalance;
  const availableMargin = availableBalance - usedMargin;
  return (
    <>
      <h3 className="title">Funds</h3>
      <p className="page-subtitle">Manage your trading capital and margins.</p>
      <div className="funds-summary">
        <div className="fund-card">
          <h3>₹{availableBalance.toLocaleString("en-IN")}</h3>
          <p>Available Balance</p>
        </div>

        <div className="fund-card">
          <h3>₹{usedMargin.toLocaleString("en-IN")}</h3>
          <p>Used Margin</p>
        </div>

        <div className="fund-card">
          <h3 className="profit">₹{availableMargin.toLocaleString("en-IN")}</h3>
          <p>Available Margin</p>
        </div>
      </div>

      <div className="funds-grid">
        {/* Left Side */}
        <div className="equity-section">
          <h4>Equity</h4>

          <div className="table">
            <div className="data">
              <p>Available Margin</p>
              <p className="imp profit">₹{availableMargin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Used Margin</p>
              <p className="imp">₹{usedMargin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Available Cash</p>
              <p className="imp">₹{availableCash.toFixed(2)}</p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>
                ₹
                {openingBalance.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="data">
              <p>Payin</p>
              <p>
                ₹
                {payin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Delivery Margin</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Options Premium</p>
              <p>₹0.00</p>
            </div>

            <hr />

            <div className="data">
              <p>Collateral (Liquid Funds)</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-panel">
          <div className="funds-actions">
            <p>Instant, zero-cost fund transfers with UPI</p>

            <div>
              <Link
                className="btn btn-green"
                onClick={() => alert("Feature coming soon")}
              >
                + Add Funds
              </Link>

              <Link
                className="btn btn-blue"
                onClick={() => alert("Feature coming soon")}
              >
                Withdraw
              </Link>
            </div>
          </div>

          <div className="commodity-card">
            <h4>Commodity Account</h4>

            <p>Trade Gold, Silver, Crude Oil and other commodity contracts.</p>

            <button className="btn btn-blue">Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
