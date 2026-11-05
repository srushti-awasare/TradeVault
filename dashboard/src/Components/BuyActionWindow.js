import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import GeneralContext from "./GeneralContext";

import "./buySell.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0) {
      await Swal.fire({
        icon: "warning",
        title: "Invalid Quantity",
        text: "Please enter a valid quantity.",
        confirmButtonColor: "#387ed1",
      });
      return;
    }

    if (stockPrice <= 0) {
      await Swal.fire({
        icon: "warning",
        title: "Invalid Price",
        text: "Please enter a valid price.",
        confirmButtonColor: "#387ed1",
      });
      return;
    }

    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        {
          withCredentials: true,
        },
      );

      generalContext.closeBuyWindow();

      await Swal.fire({
        icon: "success",
        title: "Order Placed Successfully",
        html: `
          <b>BUY</b> order for <b>${stockQuantity}</b> share(s) of
          <b>${uid}</b> at <b>₹${stockPrice}</b>.
        `,
        timer: 1800,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      window.location.reload();
    } catch (err) {
      generalContext.closeBuyWindow();

      await Swal.fire({
        icon: "error",
        title: "Buy Failed",
        text: err.response?.data?.message || "Something went wrong.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
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

export default BuyActionWindow;
