import React from "react";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions (0)</h3>

      <div className="positions-summary">
        <div className="position-card">
          <h3>0</h3>
          <p>Open Positions</p>
        </div>

        <div className="position-card">
          <h3>₹0.00</h3>
          <p>Exposure</p>
        </div>

        <div className="position-card">
          <h3 className="profit">₹0.00</h3>
          <p>Unrealized P&amp;L</p>
        </div>
      </div>

      <div className="empty-holdings">
        <div className="empty-icon">📊</div>

        <h3>No Open Positions</h3>

        <p>
          Intraday and F&amp;O positions will appear here once you start
          trading.
        </p>
      </div>
    </>
  );
};

export default Positions;
