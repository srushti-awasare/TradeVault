import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./buySell.css";
import Swal from "sweetalert2";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "https://tradevault-backend-9ehr.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      // Close the sell window first
      generalContext.closeSellWindow();

      await Swal.fire({
        icon: "success",
        title: "Sell Order Placed!",
        text: `${stockQuantity} shares sold at ₹${stockPrice}`,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      window.location.reload();
    } catch (err) {
      // Close the sell window first
      generalContext.closeSellWindow();

      await Swal.fire({
        icon: "warning",
        title: "Cannot Place Sell Order",
        html: `
      <b>${err.response?.data?.message || "Something went wrong."}</b><br>
      <small>You can only sell shares that you currently own.</small>
    `,
        confirmButtonText: "OK",
        confirmButtonColor: "#f6465d",
      });
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Sell Order</span>

        <div>
          <button
            type="button"
            className="btn btn-red"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
