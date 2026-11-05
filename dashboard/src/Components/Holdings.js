import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Portfolio calculations
  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0,
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  // Graph data
  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(56,126,209,0.6)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings</h3>
      <p className="page-subtitle">Track your long-term investments.</p>

      {/* Summary Cards */}
      <div className="holdings-summary">
        <div className="holding-card">
          <h3>₹{totalInvestment.toLocaleString("en-IN")}</h3>
          <p>Total Investment</p>
        </div>

        <div className="holding-card">
          <h3>₹{currentValue.toLocaleString("en-IN")}</h3>
          <p>Current Value</p>
        </div>

        <div className="holding-card">
          <h3 className={pnl >= 0 ? "profit" : "loss"}>
            {pnl >= 0 ? "+" : "-"}₹{Math.abs(pnl).toLocaleString("en-IN")}
          </h3>

          <p>
            Total P&amp;L
            <span className={pnl >= 0 ? "profit" : "loss"}>
              {" "}
              ({pnlPercent}%)
            </span>
          </p>
        </div>
      </div>

      {/* Empty State */}
      {allHoldings.length === 0 ? (
        <div className="empty-holdings">
          <div className="empty-icon">📈</div>

          <h3>No Holdings Yet</h3>

          <p>
            Buy your first stock to start building your investment portfolio.
          </p>
        </div>
      ) : (
        <>
          {/* Holdings Table */}
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. Cost</th>
                  <th>LTP</th>
                  <th>Cur. Val</th>
                  <th>P&amp;L</th>
                  <th>Net Chg.</th>
                  <th>Day Chg.</th>
                  <th>Allocation</th>
                </tr>
              </thead>

              <tbody>
                {allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;

                  const allocation =
                    currentValue > 0
                      ? ((curValue / currentValue) * 100).toFixed(2)
                      : 0;

                  const profitLoss = curValue - stock.avg * stock.qty;

                  const profClass = profitLoss >= 0 ? "profit" : "loss";

                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>

                      <td className={profClass}>{profitLoss.toFixed(2)}</td>

                      <td className={profClass}>{stock.net}</td>

                      <td className={dayClass}>{stock.day}</td>

                      <td>{allocation}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Portfolio Graph */}
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;
