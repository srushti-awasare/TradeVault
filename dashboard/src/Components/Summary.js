import React, { useEffect, useState } from "react";
import axios from "axios";
const username = localStorage.getItem("username");

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  const availableCash = 3740; // temporary

  useEffect(() => {
    axios
      .get("https://tradevault-backend-9ehr.onrender.com/allHoldings", {
        withCredentials: true,
      })
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalHoldings = holdings.length;

  const investment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0,
  );

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0,
  );

  const totalPnL = currentValue - investment;

  const totalReturn = investment > 0 ? (totalPnL / investment) * 100 : 0;
  return (
    <>
      <div className="summary-cards">
        <div className="summary-card">
          <h4>{totalHoldings}</h4>
          <p>Holdings</p>
        </div>

        <div className="summary-card">
          <h4>₹{currentValue.toFixed(2)}</h4>
          <p>Portfolio Value</p>
        </div>

        <div className="summary-card">
          <h4>₹{availableCash.toFixed(2)}</h4>
          <p>Available Funds</p>
        </div>
      </div>

      <div className="username">
        <h6>
          Hi, <b>{username || "User"}!</b>
        </h6>

        <p className="text-muted">
          Welcome to Kite. Here's your market summary.
        </p>

        <hr className="divider" />
      </div>

      {/* Portfolio */}

      <div className="section">
        <span>
          <p>Portfolio Overview</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
              {totalPnL >= 0 ? "+" : "-"}₹{Math.abs(totalPnL).toFixed(2)}
            </h3>

            <p>Today's P&amp;L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Portfolio Value <span>₹{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Total Return:&nbsp;
              <span className={totalReturn >= 0 ? "profit" : "loss"}>
                {totalReturn >= 0 ? "+" : ""}
                {totalReturn.toFixed(2)}%
              </span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Equity */}

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{availableCash.toFixed(2)}</h3>
            <p>Available Cash</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Used Margin <span>₹0.00</span>
            </p>

            <p>
              Opening Balance
              <span> ₹{availableCash.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <h4>My Holdings ({totalHoldings})</h4>

        <table className="holding-preview">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&amp;L</th>
            </tr>
          </thead>

          <tbody>
            {holdings.slice(0, 5).map((stock) => {
              const pnl = (stock.price - stock.avg) * stock.qty;

              return (
                <tr key={stock.name}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg}</td>

                  <td>₹{stock.price}</td>

                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl >= 0 ? "+" : "-"}₹{Math.abs(pnl).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="view-all">
          <a href="/holdings">View All Holdings →</a>
        </div>
      </div>
    </>
  );
};

export default Summary;
