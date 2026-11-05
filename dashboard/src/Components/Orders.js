import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://tradevault-backend-9ehr.onrender.com/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const totalOrders = orders.length;
  const executedOrders = orders.length;
  const pendingOrders = 0;
  return (
    <>
      <div className="page-header">
        <h2>Orders</h2>
        <p>Your complete order history.</p>
      </div>
      <div className="orders-summary">
        <div className="order-card">
          <h3>{totalOrders}</h3>
          <p>Total Orders</p>
        </div>

        <div className="order-card">
          <h3>{executedOrders}</h3>
          <p>Executed</p>
        </div>

        <div className="order-card">
          <h3>0</h3>
          <p>Pending</p>
        </div>
      </div>
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td
                  className={order.mode === "BUY" ? "buy-order" : "sell-order"}
                >
                  {order.mode}
                </td>
                <td>{order.qty}</td>
                <td>
                  ₹
                  {Number(order.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </td>{" "}
                <td>
                  <span className="status-badge executed">Executed</span>
                </td>
                <td>
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {orders.length === 0 && (
        <div className="no-orders">
          <h4>No orders yet</h4>

          <p>Buy or sell a stock to see your order history here.</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      )}
    </>
  );
};

export default Orders;
